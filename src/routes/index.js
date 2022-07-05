const express = require("express");
const router = express.Router();

const { products } = require("../controllers/index");

// PRODUCTS
router.get("/products", products.getAll);
router.post("/products", products.create);
router.get("/products/:id", products.getAll);
router.put("/products/:id", products.update);
router.delete("/products/:id", products.destroy);

// USERS

// STOCK

// AUTH

//ROLES


module.exports = router;
