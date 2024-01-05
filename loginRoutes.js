const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema");

router.get("/", (req, res, next) => {
  userSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/login", (req, res) => {
  const { username } = req.body;
  userSchema.findOne({ username: username }).then((user) => {
    if (user) {
      if (user.username === username) {
        console.log("Hi from serrver");
        res.json("Login Successfull");
      } else {
        res.json("Incorrect");
      }
    } else {
      alert("Record Not Found");
    }
  });
});
module.exports = router;
