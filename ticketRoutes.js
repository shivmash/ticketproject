const express = require("express");
const router = express.Router();
const ticketSchema = require("../model/ticketSchema");
const userSchema = require("../model/userSchema");

router.get("/", (req, res, next) => {
  ticketSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});
router.post("/create-ticket/", (req, res, next) => {
  //middleware funtion created to insert data from server to database
  //create-student is the link
  const { userId } = req.body;
  userSchema.findOne({ userId: userId }).then((user) => {
    if (user) {
      if (user.userId === userId) {
        ticketSchema.create(req.body, (err, data) => {
          //req.body is the req with data from front end ,
          //that takes server to data base ,

          if (err) {
            return next(err);
          } else {
            return res.json(data);
          }
        });
        return res.json("ticket booked");
      } else {
        return res.json("user id not found");
      }
    } else {
      return res.json("something went wrong");
    }
  });

  console.log(req.body);
});

module.exports = router;
