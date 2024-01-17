const mongoose=require('mongoose')
//schemacd
const emailSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
});
//modal
const Email=mongoose.model('Email',emailSchema);


module.exports=Email;