const { productSchema, reviewSchema } = require('./schema');

const validateProduct = (req, res, next) => {
    const { name, image, price, desc } = req.body;
    const { error } = productSchema.validate({ name, image, price, desc });
    if (error) {
        return res.render('error', { error });
    }
    next();
}
const validateReview = (req, res, next) => {
    const { rating, comment } = req.body;
    const { error } = reviewSchema.validate({ rating, comment });
    if (error) {
        return res.render('error', { error });
    }
    next();
}
const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
module.exports = { isLoggedIn, validateProduct, validateReview };