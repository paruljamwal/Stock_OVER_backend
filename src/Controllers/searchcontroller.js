const express=require('express')
const router=express.Router()
const Search=require("../Models/searchmodel")
router.get("/search", async (req, res) => {
    try {
      const search = await Search.find().lean().exec();
      return res.status(200).send({search});
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  
  //2.post
  
router.post("/search", async (req, res) => {
    try {
      const search = await Search.create(req.body);
      return res.status(200).send({search});
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  
  //3. get single
  
router.get("/search/:name", async (req, res) => {
    try {
      const search = await Search.find({name:req.query.name}).lean().exec();
      return res.status(200).send(search);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  
  //4.patch
  
router.patch("/search/:id", async (req, res) => {
    try {
      const search = await Search.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      return res.status(200).send({search});
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  
router.delete("/search/:id", async (req, res) => {
    try {
      const search = await Search.findByIdAndDelete(req.params.id)
        .lean()
        .exec();
      return res.status(200).send(search);
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Something went wrong try again later" });
    }
  });
  

  module.exports=router