const express=require('express');
const routerRegis=express.Router();
const userDataCreate=require('../controller/controller')
routerRegis.post('/register',userDataCreate)
module.exports=routerRegis;