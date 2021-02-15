const express = require("express");
const app = express();
const cart = require("./cart");
app.use(express.json());

const port = 3000;

app.use("/cart/", cart);

app.listen(port, () => console.log(`Listening on port: ${port}.`));