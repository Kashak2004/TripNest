const { response } = require("express");
const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  // console.log(req.user);
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  console.log(listing);
  //res.render("listings/show.ejs", { listing });
  res.render("listings/show.ejs", { listing, mapToken });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1,
  })
  .send();
  
  // 1️⃣ body se naya document banao
  const newListing = new Listing(req.body.listing);

  // 2️⃣ agar file aayi hai to url/filename set karo
  if (req.file) {
    const url = req.file.path;
    const filename = req.file.filename;
    console.log(url, "..", filename);
    newListing.image = { url, filename };
  }

  // 3️⃣ owner set karo (logged-in user)
  console.log(req.user);
  newListing.owner = req.user._id;

  newListing.geometry = response.body.features[0].geometry;

  // 4️⃣ save + redirect
  let saveListing = await newListing.save();
  console.log(saveListing);

  req.flash("success", "New Listing Created!");
  res.redirect(`/listings/${newListing._id}`);
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing,originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if(typeof req.file !== "undefined"){
  const url = req.file.path;
  const filename = req.file.filename;
  listing.image = { url, filename };
  await listing.save();
  }
  req.flash("success", "Listing Updated!");
  return res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  Listing.findById(id);
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
