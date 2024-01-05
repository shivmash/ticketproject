const mongoose = require("mongoose"); //installation of mongoose
const express = require("express"); //installation of express

const cors = require("cors"); //installation of cors -cross origin resource sharing

const userRoutes = require("./controller/userRoutes"); // initializing studentRoutes
const bookingRoutes = require("./controller/bookingRoutes");
const addBusRoutes = require("./controller/addBusRoutes");
const ticketRoutes = require("./controller/ticketRoutes");
const loginRoutes = require("./controller/loginRoutes")
const busRoutes = require("./controller/busRoutes");
const app = express(); //instantiation

mongoose.set("strictQuery", true); //to make entries case sensitive
const uri =
  "mongodb+srv://mashalkar01:shivshankar123@cluster0.v1p6oo9.mongodb.net/Travel";

mongoose.connect(uri); //to trigger connect event

const db = mongoose.connection; //to make connection with database

db.on("open", () => {
  console.log("Database Connected"); //to show the database is connected
});
db.on("error", (error) => {
  console.log("Error while connecting to database", error); // to show the error prompt
});
app.use(express.json());
app.use(cors()); //instantiating cors
app.get("/", (req, res) => {
  res.send("hello");
  console.log("hello");
});
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/bookings", bookingRoutes);
app.use("/addbuses", addBusRoutes);
app.use("/tickets", ticketRoutes);
app.use("/buss", busRoutes);
const port = 5000;
app.listen(port, () => {
  console.log("server listening on port", port); //listening on server port
});
