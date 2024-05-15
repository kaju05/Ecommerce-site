const express = require('express');
const Review = require('../models/Review');
const Product = require('../models/Product');
const router = express.Router();
const { validateReview } = require('../middleware');
router.post('/products/:id/review', validateReview, async (req, res) => {
    let { id } = req.params;
    let { rating, comment } = req.body;
    let product = await Product.findById(id);
    let review = new Review({ rating, comment });
    product.reviews.push(review);
    await product.save();
    await review.save();
    req.flash('msg', 'Review posted succesfully');
    res.redirect(`/products/${id}`);
})

module.exports = router;





