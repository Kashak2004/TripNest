const mongoose = require("mongoose");
const initData = require("./data");//Data require
const Listing = require("../models/listing.js");//Model require

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
   .then(() =>{
    console.log("connected to DB")
    })
    .catch(err =>{ 
    console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () =>{
   await Listing.deleteMany({});// already data exit then delete
   initData.data = initData.data.map((obj) => ({
    ...obj,
    owner:"692a9be990cb845bec6fb83f",
    }));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
};

initDB();

