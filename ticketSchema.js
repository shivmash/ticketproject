const mongoose = require("mongoose");

const { Schema } = mongoose;
const ticketSchema = new Schema(
  {
    userId: { type: String },
    name: { type: "String" },
    contactnumber: { type: "number" },
    emailid: { type: "String" },
    from: { type: "String" },
    to: { type: "String" },
  },
  {
    collection: "Ticket",
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
