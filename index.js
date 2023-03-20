require('dotenv').config();
const express = require('express');

const db = require('./config/mongoose');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);
 
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// setting up the template engine 
//we are using ejs template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// using express router
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port: ${port}`);
});

  