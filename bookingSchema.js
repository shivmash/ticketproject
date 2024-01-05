const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    from: { type: String },
    to: { type: String },
    date: { type: Date },
    type: { type: String },
  },
  {
    collection: "Bookings",
  }
);

module.exports = mongoose.model("Bookings", bookingSchema);
