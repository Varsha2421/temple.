const express = require('express');
const router = express.Router();
const db = require('../db/database');
const { TEMPLES_LIST, DARSHAN_SLOTS, DAILY_SCHEDULE, DARSHAN_TYPES, HISTORY_TIMELINE } = require('../db/templeData');

// --- Reference data ---
router.get('/temples', (req, res) => {
  res.json(TEMPLES_LIST);
});

router.get('/history', (req, res) => {
  res.json(HISTORY_TIMELINE);
});

router.get('/timings', (req, res) => {
  res.json({ dailySchedule: DAILY_SCHEDULE, darshanSlots: DARSHAN_SLOTS });
});

router.get('/darshan-types', (req, res) => {
  res.json(DARSHAN_TYPES);
});

// Is the temple open right now? (server time, IST assumed)
router.get('/status', (req, res) => {
  const now = new Date();
  const hhmm = now.toTimeString().slice(0, 5);
  const openWindows = [
    ['05:30', '12:30'],
    ['16:00', '20:30'],
  ];
  const isOpen = openWindows.some(([start, end]) => hhmm >= start && hhmm <= end);
  const next = DAILY_SCHEDULE.find((e) => e.time > hhmm) || DAILY_SCHEDULE[0];
  res.json({ isOpen, serverTime: hhmm, nextEvent: next });
});

// --- Booking ---
router.get('/availability', (req, res) => {
  const { date } = req.query;
  if (!date) return res.status(400).json({ error: 'date is required (YYYY-MM-DD)' });
  res.json(db.getAvailability(date, DARSHAN_SLOTS));
});

router.post('/bookings', (req, res) => {
  const { name, email, phone, date, slot, people, darshanType } = req.body;
  if (!name || !phone || !date || !slot || !people) {
    return res.status(400).json({ error: 'name, phone, date, slot and people are required.' });
  }
  const numPeople = parseInt(people, 10);
  if (!Number.isInteger(numPeople) || numPeople < 1 || numPeople > 10) {
    return res.status(400).json({ error: 'people must be between 1 and 10.' });
  }
  const today = new Date().toISOString().slice(0, 10);
  if (date < today) {
    return res.status(400).json({ error: 'date cannot be in the past.' });
  }
  try {
    const booking = db.createBooking({
      name,
      email: email || '',
      phone,
      date,
      slot,
      people: numPeople,
      darshanType: darshanType || 'general',
    });
    res.status(201).json(booking);
  } catch (err) {
    if (err.code === 'SLOT_FULL') return res.status(409).json({ error: err.message });
    console.error(err);
    res.status(500).json({ error: 'Could not create booking.' });
  }
});

router.get('/bookings/:id', (req, res) => {
  const booking = db.getBooking(req.params.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found.' });
  res.json(booking);
});

router.post('/bookings/:id/cancel', (req, res) => {
  const booking = db.cancelBooking(req.params.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found.' });
  res.json(booking);
});

// Simple admin listing (no auth — for local/demo use only)
router.get('/admin/bookings', (req, res) => {
  res.json(db.getAllBookings());
});

module.exports = router;
