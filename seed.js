const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: "Iphone 14 pro",
        image: "https://images.unsplash.com/photo-1677144677444-9ab5de19143f?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 130000,
        desc: "very costly aukat ke bahar"
    },
    {
        name: "macbook pro",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price: 150000,
        desc: "bilkul hi aukat ke bahar"
    },
    {
        name: "baby",
        image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFieXxlbnwwfHwwfHx8MA%3D%3D",
        price: 200000,
        desc: "lene ki sochna bhi mat"
    },
    {
        name: "puppy",
        image: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
        price: 50000,
        desc: "be a dog parent, adopt today only"
    },
    {
        name: "DSLR",
        image: "https://images.unsplash.com/photo-1625545013865-80da35181abf?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 130000,
        desc: "photo khicho"
    }
];

function seedDB() {
    Product.insertMany(products);
    console.log("data seeded successfully");
}
module.exports = seedDB;