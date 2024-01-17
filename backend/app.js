const express=require('express')
const app=express();
const router=require('./router');
const subrouter=require('./subroute');
const bodyParser = require('body-parser');
const path=require('path');
const { log } = require('console');
const connectDB=require('./config/mongodb')

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'..','frontend'))
app.use(express.static('../frontend/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connectDB()
// app.use('/',subrouter);
app.use('/',router);





app.listen(3000,()=>{
    console.log('server is running on port 3000');
})

