# 🛠 SkyDreams – Server (Backend)

This is the backend of the **SkyDreams MERN Flight Booking App**, built using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- User authentication (register/login)
- Admin approval system for flight operators
- Flight CRUD (Create, Read, Update)
- Booking system with seat calculation
- View and cancel bookings
- Filtered data per user role (user/operator/admin)

---

## 🔧 Getting Started

### 📦 Install dependencies

```bash
npm install
▶️ Start the backend server
npm start
Server will run on:
📍 http://localhost:6001

****
Make sure MongoDB is running locally (default port 27017).
If using MongoDB Atlas, update the connection string in index.js.
****
📂 Key Files
File	Purpose
index.js	Main Express server, all routes
schemas.js	Mongoose models: User, Flight, Booking



###-----------------------------------------------------------------
📡 API Endpoints (Main Highlights)
POST /register – Register user/operator

POST /login – Login

POST /add-flight – Add a new flight

GET /fetch-flights – Fetch all flights

GET /fetch-bookings – Fetch all bookings

GET /fetch-operator-bookings/:id – Bookings for specific operator

POST /book-ticket – Book a flight

PUT /cancel-ticket/:id – Cancel a ticket

POST /approve-operator – Admin approval

POST /reject-operator – Admin rejection
-------------------------------------------------------------------###


🔐 Notes
No JWT or real authentication (for simplicity)
Fake payment logic is handled on frontend
All seat allocations are calculated in backend