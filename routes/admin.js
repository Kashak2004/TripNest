const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const User = require("../models/user");
const { isAdmin } = require("../middleware");

// Admin dashboard
router.get("/dashboard", isAdmin, async (req, res) => {
    const listingsCount = await Listing.countDocuments();
    const usersCount = await User.countDocuments();
    res.render("admin/dashboard", { listingsCount, usersCount });
});

// Admin – view all listings
router.get("/listings", isAdmin, async (req, res) => {
    const listings = await Listing.find({});
    res.render("admin/listings", { listings });
});

// Admin – delete any listing
router.delete("/listings/:id", isAdmin, async (req, res) => {
    await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted by admin");
    res.redirect("/admin/listings");
});

// Admin – view all users
router.get("/users", isAdmin, async (req, res) => {
    const users = await User.find({});
    res.render("admin/users", { users });
});

module.exports = router;
