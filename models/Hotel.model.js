var mongoose = require("mongoose");

var HotelSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: [true, "Image path required"],
  },
  title: {
    type: String,
    required: [true, "Product Title required"],
  },
  location: {
    type: String,
    required: [true, "Location required"],
  },
  description: {
    type: String,
    required: [true, "Description required"],
  },
  rating: {
    type: Number,
    required: [true, "Rating required"],
  },
  price: {
    type: Number,
    required: [true, "Price required"],
  },
  availability: {
    type: Boolean,
    default: true,
    required: [true, "Availability required"],
  },
});

var Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
