const mongoose =require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    // Add other fields as needed
  });
  
  const ProductModel = mongoose.model('Product', productSchema);

  module.exports=ProductModel