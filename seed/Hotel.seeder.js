var Hotel = require("../models/hotel.model");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/travIngo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var hotels = [
  new Hotel({
    imagePath:
      "https://lh3.googleusercontent.com/proxy/LV_jyENIgyUCqjKqV0tevW_pBRa3LDU2LTHLlldC8vA-oEYCHE5w_MIDmY0twb_i0F_STAPNAIizWzwOqlHv5dmj2FzjS-JdpyVbjxOI_jkCQJLzEg",
    title: "Seagulls Hotel",
    location: "Cox's Bazar",
    description: ["Breakfast Included", 'Standard Double Room'],
    rating: 5.5,
    price: 6528,
    availability: true,
    availableRooms: 2
  }),
  new Hotel({
    imagePath:
      "https://www.amari.com/-/media/images/thumb-hotels/600x400/amari/amari-dhaka.jpg",
    title: "Amari Dhaka",
    location: "Gulshan, Dhaka",
    description: ['Deluxe King Room', '20% off on Food & Beverage','Free Cancelation'],
    rating: 8.2,
    price: 8469,
    availability: true,
    availableRooms: 5
  }),
  new Hotel({
    imagePath:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ef/a3/49/family-suite.jpg?w=900&h=-1&s=1",
    title: "Hotel Noorjahan Grand",
    location: "Sylhet",
    description: ['Breakfast Included','Budget Double Room','Free Cancelation'],
    rating: 8.5,
    price: 2579,
    availability: true,
    availableRooms: 4
  }),
  new Hotel({
    imagePath:
      "https://media.radissonhotels.net/image/radisson-blu-dhaka-water-garden/guestroom/16256-113891-f65416904_3xl.jpg?impolicy=Card",
    title: "Radisson Blue Dhaka Water Garden",
    location: "Dhaka",
    description:['Superior Rooms'],
    rating: 7.6,
    price: 8775,
    availability: true,
    availableRooms: 8
  }),
  new Hotel({
    imagePath:
      "https://media.radissonhotels.net/image/radisson-blu-chattogram-bay-view/guestroom/16256-116439-f65569830_3xl.jpg",
    title: "Radisson Blue Chattogram Bay View",
    location: "Chittagong",
    description:['Superior Room','Breakfast Included','Free Cancelation','No payment Needed'],
    rating: 8.5,
    price: 10593,
    availability: true,
    availableRooms: 12
  }),
  new Hotel({
    imagePath:
      "https://pix10.agoda.net/hotelImages/603/6034572/6034572_18111812440069775405.jpg",
    title: "Hill Palace Resort",
    location: "Bandarban",
    description:['Basic Triple Room','Free Cancelation','No payment Needed'],
    rating: 7.7,
    price: 2543,
    availability: true,
    availableRooms: 9
  }),
  new Hotel({
    imagePath:
      "https://pix10.agoda.net/hotelImages/603/6034572/6034572_18111812440069775405.jpg",
    title: "Green Park Tea Resort",
    location: "Sreemangal",
    description:['Luxury Triple Room','Breakfast Included','Free Cancelation'],
    rating: 8.2,
    price: 3878,
    availability: true,
    availableRooms: 6
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
