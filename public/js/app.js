// Shared behavior: live open/closed status pill, used on pages that include it.
async function loadStatusPill() {
  const pill = document.getElementById('statusPill');
  if (!pill) return;
  try {
    const res = await fetch('/api/status');
    const data = await res.json();
    const dict = (window.I18N && I18N[document.documentElement.lang]) || {};
    pill.classList.remove('open', 'closed');
    pill.classList.add(data.isOpen ? 'open' : 'closed');
    const label = data.isOpen ? (dict.status_open || 'Open now') : (dict.status_closed || 'Closed now');
    const nextLabel = dict.status_next || 'Next:';
    pill.innerHTML = `<span class="status-dot"></span> ${label} &middot; ${nextLabel} ${data.nextEvent.event} (${data.nextEvent.time})`;
  } catch {
    pill.textContent = '';
  }
}

document.addEventListener('DOMContentLoaded', loadStatusPill);
