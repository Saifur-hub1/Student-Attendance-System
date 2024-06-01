const { log } = require('console')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bookstore', {
  serverSelectionTimeoutMS: 1000
})
  .then(()=>{
    console.log('Database connected');
  })
  .catch((e)=>{
    console.log(e)
  })