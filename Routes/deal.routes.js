const mongoose = require("mongoose");
const express = require("express");
const dealRouter = express.Router();
const {DealModel} = require("../model/deals.model");
const {authentication}=require("../middleware/admin.middleware")

dealRouter.post("/adddeal" , async(req , res) => {
    try {
          
         const deal = new DealModel(req.body);
         let deals = await DealModel.find();
          await deal.save();
          
         res.status(200).send({"msg" : " Deals data successfully added"})
    }

    catch(err) {
         res.send({"msg" : err.message})
    }
})

dealRouter.get("/" , async(req , res) => {
      try{
           let deal = await DealModel.find();
           res.status(200).send(deal);
      }
      catch(err){
        res.send({"msg" : err.message})
      }
})

  module.exports={dealRouter}