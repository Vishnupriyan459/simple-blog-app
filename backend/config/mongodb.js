const mongoose=require('mongoose')


const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/blogDB');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error();
     
    }
  };
  module.exports = connectDB;