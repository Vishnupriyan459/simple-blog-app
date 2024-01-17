const express = require('express')
const app=express()
const  path = require('path')
const router=express.Router();
const Email=require('./config/emaildb');
const Postdb=require('./config/postdb');
const { log } = require('console');
//home
router.get(/^\/(home)?(\.ejs)?$/i,async(req,res)=>{
    
    const dataFromDB = await Postdb.find().sort({ createdAt: -1 });;
    console.log(dataFromDB)
    res.render(path.join(__dirname,'..','frontend','views','home.ejs'),{dataFromDB})
   
})
//newsletter
router.get(/^\/newsletter(\.ejs)?$/i,(req,res)=>{
    
    
    res.render(path.join(__dirname,'..','frontend','views','newsletter.ejs'))
    
})



//about
router.post('/email_submit',async(req,res)=>{
   
   
    try{
        const {email} = await req.body;
        const saver = await new Email({email})
        await saver.save();

        
        res.json({message:true})
        
    }
    catch(error){
        console.error('Error of saving data:',error)
        res.status(500).json({error:'Internal Server Error'})
    }
    


})
//posting a content
router.post('/create_post',async(req,res)=>{
    try{
        const data=await req.body;
        const saver = await new Postdb(data)
        await console.log(saver);
        await saver.save().then(console.log('post is saved'))
        await res.json({message:true});
        
    }
    catch(error){
        
        
        res.status(500).json({error:'Internal Server Error',code:error.code})
    }
    
})


    


router.get(/^\/about(\.ejs)?$/i,(req,res)=>{
    
   
    res.render(path.join(__dirname,'..','frontend','views','about.ejs'))
})
//post
router.get(/^\/create(\.ejs)?$/i,(req,res)=>{
    
   
    res.render(path.join(__dirname,'..','frontend','views','create.ejs'))
})

//reading page
router.post('/read',async(req,res)=>{
    try{
        const {title}=  await req.body;
        const foundData = await Postdb.find({ title });
        console.log('how to use',foundData)
        res.json(foundData);


    }
    catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports=router;