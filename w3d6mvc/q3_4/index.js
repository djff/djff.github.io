const Product = require("./product_model");
const express = require("express");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

const products = [
    new Product("milk", 2000, "500ml white milk Nido", 1),
    new Product("bread", 3000, "richly buttered break", 2),
    new Product("sugar", 2500, "pack of sugar 50 cubes", 3)
]

const cart = [
    {
        product: products[0],
        quantity: 5
    },
    {
        product: products[1],
        quantity: 2
    }
]

app.get("/products", (req, res) => {
    res.locals = {
        products: products
    };
    res.render('product');
})

app.get("/cart", (req, res) =>{
    res.locals = {cart: cart};
    res.render('shoppingCart');
})

app.listen(3000);