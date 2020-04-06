const express = require('express');
const app = express();
const port = 8000;
const expresslayout = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');

app.use(express.static('./assets'));
// to read from post requests
app.use(express.urlencoded());

app.use(cookieParser());

// to use layouts
app.use(expresslayout);
// style pagewise extract style and scripts from subpages
app.set('layout extractStyles',true);
app.set('lauout extractScripts',true);

//use express router 
app.use('/',require('./routes'));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
   if(err){
       console.log('error',err);
       //the above statement will return error ,that will write error
       //now this statement will also give the same answer in the format of key:value
       console.log(`Error in running the server : ${err}`);
   }  
   //else statement
   console.log(`server is running on port : ${port}`);
   console.log(`let's add : ${2+5}`);
});
