const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        max: 5,
        min: 0,
        required: true,
    },
    comment: {
        type: String,
        trim: true
    }
}, { timestamp: true });

let Review = mongoose.model('Review', reviewSchema);
module.exports = Review;