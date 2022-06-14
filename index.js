const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connect=require("./src/configs/db")
app.use(express.json());


//schema***********************************

const productSchema = new mongoose.Schema(
  {
    image: { type: String, require: true },
    name: { type: String, require: true },
    price:{type:Number, require:true},
    assembly:{type:String},
    color:{type:String},
    material:{type:String},
    age:{type:Number},
    types:{type:String},
    brands:{type:String},
    features:{type:String},
    availabilty:{type:String}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//schema ends*******************************

//searchbar**************************

const searchSchema = new mongoose.Schema(
  {
    image: { type: String, require: true },
    name: { type: String, require: true },
    price:{type:Number, require:true},
    assembly:{type:String},
    color:{type:String},
    material:{type:String},
    age:{type:Number},
    types:{type:String},
    brands:{type:String},
    features:{type:String},
    availabilty:{type:String}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


//Model**********************************

const Product = mongoose.model("product", productSchema);

const Search = mongoose.model("search", searchSchema);

//model ends*****************************

//Controller*******************************

//Controllers ends*************************

// CRUD operations**************************

//1. get

app.get("/products", async (req, res) => {
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

app.post("/products", async (req, res) => {
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

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong try again later" });
  }
});

//4.patch

app.patch("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send({ deleteProduct: products });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong try again later" });
  }
});

//5.delete

app.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(products);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong try again later" });
  }
});







app.listen(8080, async () => {
  try {
    await connect();
    console.log("Listining port 8080");
  } catch (err) {
    console.log({ message: err });
  }
});
