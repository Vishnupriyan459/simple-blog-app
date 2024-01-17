const express = require('express')
const app=express()
const  path = require('path')
const router=express.Router();
const {Email}=require('./config/mongodb');
const route=require('./router')

router.post('/email_submit',async(req,res)=>{
    try{
        const {email} = req.body();
        const saver= new Email(email)
        await saver.save();
        console.log('data saved');
        res.redirect('/newsletter')
    }
    catch(error){
        console.error('Error of saving data:',error)
        res.status(500).json({error:'Internal Server Error'})
    }
    


})
// .get('/email_submit',async(req,res)=>{
//     await res.redirect('/newsletter')
//     await console.log('And redirected')
// })

module.exports=router;