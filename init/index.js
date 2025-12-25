const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");
const User = require("../models/user");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("connected to DB");
}

const initDB = async () => {
  await Listing.deleteMany({});

  const user = await User.findOne();

  initData.data = initData.data.map(obj => ({
    ...obj,
    owner: user._id,
  }));

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

main().then(initDB);
