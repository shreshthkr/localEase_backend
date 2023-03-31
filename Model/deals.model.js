  const mongoose = require("mongoose");

  const DealSchema = mongoose.Schema( {
    tag: String,
    field : String,
    Valid_for : String,
    Valid_on : String,
    title: String,
    m_price: String,
    d_price: String,
    timing: String,
  },{
      versionKey : false
  })

  const DealModel = mongoose.model("Deal" , DealSchema);

  module.exports={DealModel}