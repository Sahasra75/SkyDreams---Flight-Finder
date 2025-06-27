import mongoose from "mongoose";
import Flight from "./models/Flight.js"; // make sure this file exists

const MONGO_URL = "mongodb://localhost:27017/flightBooking";

const flights = [
  {
    flightName: "IndiGo 6E",
    flightId: "6E-101",
    origin: "Delhi",
    destination: "Mumbai",
    departureTime: "2025-07-01T08:00:00",
    arrivalTime: "2025-07-01T10:00:00",
    basePrice: 3800,
    totalSeats: 180
  },
  {
    flightName: "Air India AI",
    flightId: "AI-202",
    origin: "Mumbai",
    destination: "Hyderabad",
    departureTime: "2025-07-01T12:00:00",
    arrivalTime: "2025-07-01T14:00:00",
    basePrice: 3100,
    totalSeats: 160
  },
  {
    flightName: "SpiceJet SG",
    flightId: "SG-303",
    origin: "Hyderabad",
    destination: "Chennai",
    departureTime: "2025-07-01T15:30:00",
    arrivalTime: "2025-07-01T17:00:00",
    basePrice: 2900,
    totalSeats: 140
  },
  {
    flightName: "AirAsia AK",
    flightId: "AK-404",
    origin: "Chennai",
    destination: "Kolkata",
    departureTime: "2025-07-02T08:00:00",
    arrivalTime: "2025-07-02T10:45:00",
    basePrice: 3500,
    totalSeats: 200
  },
  {
    flightName: "Vistara UK",
    flightId: "UK-505",
    origin: "Kolkata",
    destination: "Delhi",
    departureTime: "2025-07-02T11:30:00",
    arrivalTime: "2025-07-02T13:50:00",
    basePrice: 4000,
    totalSeats: 190
  }
];

const seedFlights = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("✅ Connected to MongoDB");

    await Flight.deleteMany(); // clean old flights
    await Flight.insertMany(flights); // insert fresh ones

    console.log("✈️ Flights seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding flights:", error);
    process.exit(1);
  }
};

seedFlights();
