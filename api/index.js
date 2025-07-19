const express = require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');
const Transaction=require('./models/transaction.js');
const mongoose  = require('mongoose');
app.use(cors());

app.use(express.json());
app.get('/api/test',(req ,res )=>{
    res.json('test ok done by fenil patel developer');
});

app.post('/api/transaction',async(req,res)=>{
   
    await mongoose.connect(process.env.MONGO_URL); 
    const {name,description,datetime,price}=req.body;
    const transaction=await Transaction.create({name,description,datetime,price});

    res.json(transaction);
});
app.listen(4000 ,() => {
    console.log(" app is running on port 4000")
});