// Lightweight file-based database (no native build tools required).
// Swap this module out for a real SQL/Mongo layer later without
// touching the routes — every function returns the same shapes.
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'bookings.json');
const SLOT_CAPACITY = 40; // max devotees per darshan slot

function readAll() {
  if (!fs.existsSync(DB_FILE)) return [];
  const raw = fs.readFileSync(DB_FILE, 'utf-8').trim();
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeAll(bookings) {
  fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2));
}

function generateBookingId() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `TMP-${stamp}${rand}`;
}

function countForSlot(date, slot) {
  return readAll()
    .filter((b) => b.date === date && b.slot === slot && b.status !== 'cancelled')
    .reduce((sum, b) => sum + b.people, 0);
}

function getAvailability(date, slots) {
  return slots.map((slot) => {
    const booked = countForSlot(date, slot.time);
    return {
      time: slot.time,
      label: slot.label,
      capacity: SLOT_CAPACITY,
      booked,
      remaining: Math.max(SLOT_CAPACITY - booked, 0),
    };
  });
}

function createBooking({ name, email, phone, date, slot, people, darshanType }) {
  const bookings = readAll();
  const alreadyBooked = countForSlot(date, slot);
  if (alreadyBooked + people > SLOT_CAPACITY) {
    const remaining = Math.max(SLOT_CAPACITY - alreadyBooked, 0);
    const err = new Error(`Only ${remaining} spot(s) left in this slot.`);
    err.code = 'SLOT_FULL';
    throw err;
  }
  const booking = {
    id: generateBookingId(),
    name,
    email,
    phone,
    date,
    slot,
    people,
    darshanType,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };
  bookings.push(booking);
  writeAll(bookings);
  return booking;
}

function getBooking(id) {
  return readAll().find((b) => b.id === id.toUpperCase()) || null;
}

function cancelBooking(id) {
  const bookings = readAll();
  const booking = bookings.find((b) => b.id === id.toUpperCase());
  if (!booking) return null;
  booking.status = 'cancelled';
  writeAll(bookings);
  return booking;
}

function getAllBookings() {
  return readAll().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

module.exports = {
  SLOT_CAPACITY,
  getAvailability,
  createBooking,
  getBooking,
  cancelBooking,
  getAllBookings,
};
