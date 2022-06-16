const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors=require("cors")
const PORT = process.env.PORT

const connect=require("./configs/db")
const productControler=require("./Controllers/Product.controller")
const searchControler=require("./Controllers/searchcontroller")

app.use(cors())

app.use("/",productControler)

app.use("/",searchControler)




app.listen(PORT, async () => {
  try {
    await connect();
    console.log("Listining port 8080");
  } catch (err) {
    console.log({ message: err });
  }
});
