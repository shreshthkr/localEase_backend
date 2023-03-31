  const mongoose = require("mongoose");

  const ProductSchema = mongoose.Schema({
         "adminID" : String,
         "url" : String,
         "img_src":String,
         "rating_img_src":String,
         "rating" : Number,
         "heading":String,
         "value" : String,
         "value_2" : String,
         "price" : Number,
         "tag" : String,
         "field" : String
  })

  const ProductModel = mongoose.model("Product" , ProductSchema);

  module.exports={ProductModel}