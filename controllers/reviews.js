const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
    //console.log(req.params.id);
    let listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review); // singular Review
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();


    /*console.log("new review saved");
   res.send("new review saved");*/

   req.flash("success","New Review Created!");
   res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;

    // remove review reference from listing
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // delete review document
    await Review.findByIdAndDelete(reviewId);

    
    req.flash("success","Review Deleted!"); 
    res.redirect(`/listings/${id}`);
};