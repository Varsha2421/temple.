# Sri Temple — Heritage & Darshan Booking App

A full-stack template for a temple website: Chola-era history timeline, daily
pooja/darshan timings, a photo gallery, and a real ticket-booking flow with
slot capacity checks — in English and Tamil.

## Run it

```bash
npm install
npm start
```

Then open **http://localhost:3000**

## What's inside

- `server.js` — Express server, serves the frontend and the API
- `routes/api.js` — all endpoints (history, timings, availability, bookings)
- `db/database.js` — booking storage (JSON-file based, zero native
  dependencies so it runs anywhere). Swap in real SQL/Mongo later without
  touching the routes — every function returns the same shapes.
- `db/templeData.js` — **edit this file** to put in your real temple's
  history, daily schedule, and darshan slots
- `public/` — the website (plain HTML/CSS/JS, no build step)
  - `index.html`, `history.html`, `timings.html`, `gallery.html`, `booking.html`
  - `js/i18n.js` — English/Tamil dictionary (toggle button in the nav)
  - `js/booking.js` — booking form logic, live availability, ticket display

## API endpoints

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/history` | Chola-era timeline data |
| GET | `/api/timings` | Daily pooja schedule + darshan slots |
| GET | `/api/darshan-types` | General / special / archana options |
| GET | `/api/status` | Is the temple open right now? |
| GET | `/api/availability?date=YYYY-MM-DD` | Remaining seats per slot |
| POST | `/api/bookings` | Create a booking (name, phone, date, slot, people, darshanType) |
| GET | `/api/bookings/:id` | Look up a booking by its ID |
| POST | `/api/bookings/:id/cancel` | Cancel a booking |
| GET | `/api/admin/bookings` | List every booking (no auth — demo only) |

## Customizing for a real temple

1. Replace the content in `db/templeData.js` (history, schedule, slot times).
2. Replace the gallery placeholders in `public/gallery.html` with real photos.
3. Update the temple name in each page's `<title>` and `.brand` link.
4. Add real address/contact info and a map embed to the homepage.
5. If you need real auth for `/api/admin/bookings`, add a login before
   deploying — it currently has none.

## Ideas for extra features

- SMS/email confirmation on booking (e.g. via Twilio or an email API)
- QR code on the ticket for gate check-in
- Admin dashboard page (not just the JSON endpoint) to manage bookings
- Special festival-day booking rules (extended slots, higher capacity)
- Donation/Hundi payment integration
