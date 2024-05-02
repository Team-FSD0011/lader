
const express =require('express');//require -->to import all-- eg::express-- 
const connect=require('./connection');

const registration=require('./routes/regisRoute')
const app=express();
require('dotenv').config();

app.use(express.json());//to destructure the json
connect();

app.use(registration);
const port=process.env.port || 7000;


app.listen(port,()=>{
    console.log("server running on: ",port);
});

