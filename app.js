const express = require('express');
const routes= require('./routes/routes');
const not_found=require('./middleware/not-found');
const error_handler=require('./middleware/error-handler');
const connectDB=require('./db/connect');
require('dotenv').config();
const app=express();

//PORT
const PORT = process.env.PORT||3000;

//setup middleware
app.use(express.json());

//product rout
app.use('/api/v1/product',routes);

//
app.use(not_found);
app.use(error_handler);


 //start the server
const start = async function(){
    // connect to db
    try{
        //set up DB
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log("server running on port 3000");
        })
    }catch(error){
        console.log(error);
    }
}

start();