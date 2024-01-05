const mongoose = require("mongoose");

const { Schema } = mongoose;
const busSchema = new Schema(
  {
    noOfTickets: { type: "number" },
    name: { type: "String" },
    type: { type: "String" },
    avail_date: { type: "Date" },
    totalnoOfSeats: { type: "number" },
    noOfAvailSeats: { type: "number" },
  },
  {
    collection: "Buses",
  }
);

module.exports = mongoose.model("Buses", busSchema);
