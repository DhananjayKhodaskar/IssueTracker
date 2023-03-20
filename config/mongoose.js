require('dotenv').config();
//requiring a mongoose for mongodb
const mongoose = require('mongoose');

// here we are using the MongoDB Url by extracting it fron our .env file
let DB_URL = process.env.DB_URL;    

//connect to the database
mongoose.connect(DB_URL , 
  {
    usenewurlparser: true,
    useunifiedtopology: true
  }).then(()=>{
    console.log(`connection successful `);
  }).catch((err)=>{
    console.log(`error connecting to database` , err);
  })
 


