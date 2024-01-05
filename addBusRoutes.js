const express = require("express");
const router = express.Router();
const addBusSchema = require("../model/addBusSchema");

router.get("/", (req, res, next) => {
  addBusSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/add-bus", (req, res, next) => {
  //middleware funtion created to insert data from server to database
  //create-student is the link
  addBusSchema.create(req.body, (err, data) => {
    //req.body is the req with data from front end ,
    //that takes server to data base ,

    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
  console.log(req.body);
});

module.exports = router;
