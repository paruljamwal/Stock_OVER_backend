
const express = require("express");

const router = express.Router();

const Product = require("../Models/Product.model")





router.get("/products", async (req, res) => {
    try {
      const products = await Product.find().lean().exec();
      return res.status(200).send({ products: products });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  
  //2.post
  
  router.post("/products", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      return res.status(200).send({ product });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  
  //3. get single
  
  router.get("/products/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).lean().exec();
      return res.status(200).send(product);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  
  //4.patch
  
  router.patch("/products/:id", async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(200).send({ deleteProduct: product });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  


  module.exports = router