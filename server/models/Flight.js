import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
  flightName: String,
  flightId: String,
  origin: String,
  destination: String,
  departureTime: String,
  arrivalTime: String,
  basePrice: Number,
  totalSeats: Number
});

const Flight = mongoose.model('Flight', FlightSchema);
export default Flight;
