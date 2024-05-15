const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const { resolveSoa } = require('dns');
const router = express.Router();//mini instance
const { validateProduct, isLoggedIn } = require('../middleware');

router.get('/products', async (req, res) => {
    let products = await Product.find({});
    console.log(req.session);
    let msg = req.flash('msg');
    res.render('products/index', { products, msg });
});
router.post('/products', validateProduct, isLoggedIn, async (req, res) => {
    let { name, image, price, desc } = req.body;
    await Product.create({ name, image, price, desc });
    req.flash('msg', 'new products added');
    res.redirect('/products');
})
router.get('/products/new', isLoggedIn, (req, res) => {
    res.render('products/new');
})
router.get('/products/:id', isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    let msg = req.flash('msg');
    res.render('products/show', { foundProduct, msg });
})

router.get('/products/:id/edit', isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit', { foundProduct });
})

router.patch('/products/:id', validateProduct, isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let { name, image, price, desc } = req.body;
    await Product.findByIdAndUpdate(id, { name, image, price, desc });
    res.redirect('/products');
})

router.delete('/products/:id', isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let product = await Product.findById(id);
    // for (let review of product.reviews) {
    //     await Review.findByIdAndDelete(review);
    // }
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})
module.exports = router;