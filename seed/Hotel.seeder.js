var Hotel = require("../models/hotel.model");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/travIngo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var hotels = [
  new Hotel({
    imagePath:
      "https://cf.bstatic.com/images/hotel/max1024x768/132/132905587.jpg",
    title: "Hotel Ornate",
    location: "Dhaka, Bangladesh",
    description: "Super Coooool!!!",
    rating: 8.5,
    price: 750,
    availability: true,
  }),
  new Hotel({
    imagePath:
      "https://cf.bstatic.com/images/hotel/max1024x768/136/136858272.jpg",
    title: "Marino Royal Hotel",
    location: "Dhaka, Bangladesh",
    description: "Super Awesome!!!",
    rating: 8.9,
    price: 950,
    availability: true,
  }),
  new Hotel({
    imagePath:
      "https://cf.bstatic.com/images/hotel/max1024x768/179/179346947.jpg",
    title: "Dhaka Regency Hotel",
    location: "Dhaka, Bangladesh",
    description: "Super Josss!!!",
    rating: 9.1,
    price: 1750,
    availability: true,
  }),
  new Hotel({
    imagePath:
      "https://cf.bstatic.com/images/hotel/max1024x768/132/132905587.jpg",
    title: "Hotel Chombay",
    location: "Dhaka, Bangladesh",
    description: "Super Coooool!!!",
    rating: 8.5,
    price: 750,
    availability: true,
  }),
  new Hotel({
    imagePath:
      "https://cf.bstatic.com/images/hotel/max1024x768/132/132905587.jpg",
    title: "Hotel Bombay",
    location: "Dhaka, Bangladesh",
    description: "Super Coooool!!!",
    rating: 8.5,
    price: 750,
    availability: true,
  }),
];
var done = 0;
for (let i = 0; i < hotels.length; i++) {
  hotels[i].save(function (err, data) {
    done++;
    if (done === hotels.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
