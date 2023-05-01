const mongoose = require("mongoose");

const Sch = new mongoose.Schema({
    user_name :String,
    user_mobile:String,
    user_Adress:String,
    start_date:String,
    end_date:String,
    car_image: String,
    car_description: String,
    car_name: String,
    car_fuel: String,
    car_licencePlate: String,
    car_seating: String,
    car_rent: String,

  });

  module.exports = mongoose.model("bookingDetails", Sch);