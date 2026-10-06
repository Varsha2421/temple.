let DARSHAN_SLOTS = [];
let DARSHAN_TYPES = [];

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function renderTicket(booking, container) {
  container.innerHTML = `
    <div class="ticket">
      <div class="ticket-id">${booking.id}</div>
      <p style="color:var(--gold); margin:4px 0 16px; font-size:0.9rem;">
        ${booking.status === 'cancelled' ? (I18N[document.documentElement.lang].ticket_cancelled || 'This booking has been cancelled.') : (I18N[document.documentElement.lang].ticket_confirmed || 'Booking confirmed')}
      </p>
      <div class="ticket-row"><span class="k">Name</span><span>${booking.name}</span></div>
      <div class="ticket-row"><span class="k">Date</span><span>${booking.date}</span></div>
      <div class="ticket-row"><span class="k">Slot</span><span>${booking.slot}</span></div>
      <div class="ticket-row"><span class="k">People</span><span>${booking.people}</span></div>
      <div class="ticket-row"><span class="k">Darshan type</span><span>${booking.darshanType}</span></div>
      <div class="ticket-row"><span class="k">Status</span><span>${booking.status}</span></div>
      ${booking.status !== 'cancelled' ? `<button class="btn secondary" id="cancelBtn" style="margin-top:16px;" data-id="${booking.id}" data-i18n="ticket_cancel">Cancel this booking</button>` : ''}
    </div>
  `;
  const cancelBtn = container.querySelector('#cancelBtn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', async () => {
      const res = await fetch(`/api/bookings/${cancelBtn.dataset.id}/cancel`, { method: 'POST' });
      const updated = await res.json();
      renderTicket(updated, container);
    });
  }
}

async function refreshAvailability() {
  const date = document.getElementById('date').value;
  const note = document.getElementById('availabilityNote');
  const slotSelect = document.getElementById('slot');
  if (!date) return;
  note.textContent = 'Checking availability…';
  try {
    const res = await fetch(`/api/availability?date=${date}`);
    const avail = await res.json();
    slotSelect.innerHTML = avail.map(a => `
      <option value="${a.label}" ${a.remaining === 0 ? 'disabled' : ''}>
        ${a.time} — ${a.label} (${a.remaining} left)
      </option>
    `).join('');
    note.textContent = '';
  } catch {
    note.textContent = '';
  }
}

async function init() {
  const [slotsRes, typesRes] = await Promise.all([
    fetch('/api/timings').then(r => r.json()),
    fetch('/api/darshan-types').then(r => r.json()),
  ]);
  DARSHAN_SLOTS = slotsRes.darshanSlots;
  DARSHAN_TYPES = typesRes;

  document.getElementById('darshanType').innerHTML = DARSHAN_TYPES.map(t =>
    `<option value="${t.id}">${t.label}${t.price ? ' — ₹' + t.price : ''}</option>`
  ).join('');

  const dateInput = document.getElementById('date');
  dateInput.min = todayStr();
  dateInput.value = todayStr();
  dateInput.addEventListener('change', refreshAvailability);
  refreshAvailability();

  document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const errorBox = document.getElementById('formError');
    errorBox.style.display = 'none';
    const payload = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim(),
      date: document.getElementById('date').value,
      slot: document.getElementById('slot').value,
      people: document.getElementById('people').value,
      darshanType: document.getElementById('darshanType').value,
    };
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        errorBox.textContent = data.error || 'Something went wrong.';
        errorBox.style.display = 'block';
        return;
      }
      document.getElementById('formCard').style.display = 'none';
      const ticketCard = document.getElementById('ticketCard');
      ticketCard.style.display = 'block';
      renderTicket(data, ticketCard);
      refreshAvailability();
    } catch {
      errorBox.textContent = 'Network error. Please try again.';
      errorBox.style.display = 'block';
    }
  });

  document.getElementById('lookupBtn').addEventListener('click', async () => {
    const id = document.getElementById('lookupId').value.trim();
    const resultBox = document.getElementById('lookupResult');
    if (!id) return;
    const res = await fetch(`/api/bookings/${encodeURIComponent(id)}`);
    if (!res.ok) {
      resultBox.innerHTML = `<p class="error-text">No booking found for that ID.</p>`;
      return;
    }
    const booking = await res.json();
    renderTicket(booking, resultBox);
  });
}

document.addEventListener('DOMContentLoaded', init);
