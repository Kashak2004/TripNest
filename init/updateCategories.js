const mongoose = require("mongoose");
const Listing = require("../models/listing");

mongoose
  .connect(
    "mongodb+srv://kashaknonia79_db_user:dbvVKlBIIFfr8oEy@cluster0.9zsoskm.mongodb.net/wanderlust?retryWrites=true&w=majority",
  )
  .then(() => console.log("Connected"))
  .catch(console.log);

const categories = [
  "Rooms",
  "Iconic Cities",
  "Mountains",
  "Castles",
  "Amazing Pools",
  "Camping",
  "Farms",
  "Arctic",
  "Domes",
  "Boats",
];

async function updateCategories() {
  const listings = await Listing.find({});

  for (let i = 0; i < listings.length; i++) {
    listings[i].category = categories[i % categories.length];

    await listings[i].save();
  }

  console.log("Done");
  process.exit();
}

updateCategories();
