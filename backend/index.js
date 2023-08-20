const express = require ('express');
const mongoose =require('mongoose');
const cors = require('cors');
const UserModel =require('./model/UserModel')
const ProductModel =require('./model/ProductModel')

const app=express()

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/users');

app.post('/register',(req,res)=>{
        UserModel.create(req.body)
        .then(users=>res.json(users))
        .catch(err => res.json(err)) 
})
app.post('/login',(req,res)=>{
        const {email,password}=req.body;
        UserModel.findOne({email:email})
        .then(user=>{
            if(user){
            if(user.password === password){
                res.json({message:'Success',username:user})
            }else{
                res.json("Password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
        }) 
})

// Create a new product
app.post('/products', async (req, res) => {
    try {
      const product = new ProductModel(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json(
        
        { message: error.message });
    }
  });

  // Get all products
app.get('/products', async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get a specific product
app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.listen(3000,()=>{
    console.log("server is running")
})

