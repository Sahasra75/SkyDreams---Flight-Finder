# SkyDreams – MERN Stack Flight Booking App  
🌠 *Fly beyond limits, book your dreams*

Welcome to **SkyDreams**, a full-featured flight booking web application built using the MERN stack. It allows users to register, search for flights, book tickets, and manage their bookings. Flight operators can add flights, and admins can approve/reject operator requests.

## 🌟 Features

### 👤 Users
- Register & login
- Search for one-way or return flights
- View available flights and prices
- Enter passenger details
- Book flights and view booking history
- Fake payment section with validation

### 🧑‍✈️ Flight Operators
- Register and wait for admin approval
- Add and manage flights
- View bookings for flights they created

### 👩‍💼 Admin
- View all users
- Approve or reject flight operator requests
- View all flights and bookings

## 🛠 Tech Stack

- **Frontend:** React, Axios, Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose
- **Authentication:** Simple localStorage-based session
- **Deployment Ready:** Can be hosted on Render/Netlify/MongoDB Atlas

## 💻 Local Setup Instructions

### 📦 Backend
```bash
cd server
npm install
npm run dev

### 🌐 Frontend
```bash
cd client
npm install
npm start

📌 Requirements
 Node.js & npm
 MongoDB (local or MongoDB Atlas)

📂 Folder Structure

client/
  └── src/
      ├── components/
      ├── pages/
      ├── context/
      ├── styles/
server/
  └── index.js
  └── schemas.js