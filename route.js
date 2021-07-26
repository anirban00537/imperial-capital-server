const express = require("express");
const Quemode = require("./Quemodel");
const router = express.Router();
const multer = require("multer");
const nodemailer = require("nodemailer");
require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "imperialcapital16@gmail.com",
    pass: "Ndungu@7722",
  },
});

const mailOptions = {
  from: "imperialcapital16@gmail.com",
  to: "mktimothy10@gmail.com",
  subject: "one new user request",
  text: "New Application Request Received,Please check the dashboard https://imperial-front.herokuapp.com link to visit",
};
const mailOptions1 = {
  from: "imperialcapital16@gmail.com",
  to: "hassanssekasamba@gmail.com",
  subject: "one new user request",
  text: "New Application Request Received,Please check the dashboard https://imperial-front.herokuapp.com link to visit",
};

router.get("/", async (req, res) => {
  const all = await Quemode.find().sort({ _id: -1 }).exec();
  try {
    res.json(all);
  } catch (error) {}
});

router.delete("/", async (req, res) => {
  try {
    await Quemode.remove({}).exec();
    res.json("successfully deleted");
  } catch (error) {}
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newQue = new Quemode(body);
  try {
    await newQue.save();
    console.log(body);
    console.log("calling");
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("email send " + info.response);
      }
    });
    transporter.sendMail(mailOptions1, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("email send " + info.response);
      }
    });
    res.status(200).json(body);
  } catch (error) {}
});

module.exports = router;
