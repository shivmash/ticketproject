const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: { type: "String" },
    username: { type: "String" },
    password: { type: "String" },
    contact: { type: "number" },
  },
  {
    collection: "Users",
  }
);

module.exports = mongoose.model("Users", userSchema);
