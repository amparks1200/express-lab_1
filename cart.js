const express = require("express");
const app = express.Router();

const cart = [
    { id: 1, product: "sweater", price: 19.99, quantity: 1 },
    { id: 2, product: "tea", price: 59.99, quantity: 4 },
    { id: 3, product: "chapstick", price: 3.99, quantity: 3 },
    { id: 4, product: "chocolate", price: 9.99, quantity: 2 },
    { id: 5, product: "pens", price: 1.99, quantity: 6 },
    { id: 6, product: "sneakers", price: 39.99, quantity: 1 },
];

app.get("/cart-items", (req, res) => {
    
    res.status(200);
    res.json(cart);
});

app.get("/cart-items/:id", (req, res) => {
const to = req.params.to;

const item = cart.find(cart.id => {
if (item) {
    res.status(200);
    res.json(item);
} else {
    res.status(400);
    res.json('Not found');
    }
});

app.post("/cart-items", (req, res) => {
    const newItem = req.body;
    newItem.id = cart.length + 1;
    cart.push(newItem);
    
    res.status(201);
    res.json(newItem);
});

app.put("/cart-items/:id", (req, res) => {
    const index = cart.findIndex(item => item.id === parseInt(req.params.id));
    cart.splice(index, 1, req.body);

    res.status(200);
    res.json(cart[index]);
});

app.delete("/cart-items", (req, res) => {
    const index = cart.findIndex(item => item.id === parseInt(req.params.id));
    cart.splice(index, 1);

    res.status(204);
    res.json(cart);
});

module.exports = cart;