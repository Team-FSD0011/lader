const mongoose=require('mongoose');
const user= new  mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
   message:{
        type:String
   }
    
});

const userDB=mongoose.model('madhub',user);

module.exports=userDB;