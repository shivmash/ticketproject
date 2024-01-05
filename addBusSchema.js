const mongoose = require("mongoose");

const addBusSchema = new mongoose.Schema(
  {
    nameoftourism: { type: "String" },
    noofseats: { type: "number" },
    busnumber: { type: "String" },
    from: { type: "String" },
    destination: { type: "String" },
  },
  {
    collection: "AddBus",
  }
);

module.exports = mongoose.model("AddBus", addBusSchema);
