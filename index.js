const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;


// models

const Users = require("./models/details");

const booking = require("./models/booking");

const signup = require("./models/userdetails");

// Database connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    "mongodb+srv://MavinNara:1234@mavin.6la9u3p.mongodb.net/carrental"
  );
  console.log("Database is Connected!");
}

app.use(cors());
app.use(express.json());

// Api

// getting data for cars

app.post("/sendcar", async (req, res) => {
  let send = new Users();
  send.car_image = req.body.car_image;
  send.car_name = req.body.car_name;
  send.car_description = req.body.car_description;
  send.car_fuel = req.body.car_fuel;
  send.car_licencePlate = req.body.car_licencePlate;
  send.car_seating = req.body.car_seating;
  send.car_rent = req.body.car_rent;
  const doc = await send.save();
  console.log(doc);
  res.json(doc);
});

app.get("/getcars", async (req, res) => {
  const c = await Users.find({});
  res.json(c);
});

//booking details
app.post("/bookingdetails", async (req, res) => {
  let bookingdetails = new booking();
  bookingdetails.car_name = req.body.BookingDetails.car_name;
  bookingdetails.car_description = req.body.BookingDetails.car_description;
  bookingdetails.car_fuel = req.body.BookingDetails.car_fuel;
  bookingdetails.car_rent = req.body.BookingDetails.car_rent;
  bookingdetails.car_image = req.body.BookingDetails.car_image;
  bookingdetails.user_name = req.body.BookingDetails.name;
  bookingdetails.user_mobile = req.body.BookingDetails.mobile;
  bookingdetails.user_Adress = req.body.BookingDetails.address;
  bookingdetails.start_date = req.body.BookingDetails.StartTime;
  bookingdetails.end_date = req.body.BookingDetails.EndTime;
  const doc = await bookingdetails.save();
  console.log(doc);
  res.json(doc);
});

app.get("/getbookingdetails", async (req, res) => {
  const c = await booking.find({});
  res.json(c);
});

// signup

app.post("/signup", async (req, res) => {
  let details = new signup();
  details.name = req.body.signup.name;
  details.gmail = req.body.signup.gmail;
  details.password = req.body.signup.password;
  details.type = req.body.signup.type;
  const docs = await details.save();
  console.log(docs);
  res.json(docs);
});

app.get("/getsignupdetails", async (req, res) => {
  const c = await signup.find({});
  res.json(c);
});

app.listen(PORT, () => console.log("The Server is Running..............."));

