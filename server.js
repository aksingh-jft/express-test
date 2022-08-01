const express = require('express');
const cookieParser = require('cookie-parser')



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set('view engine', 'ejs');




app.use('/',require('./routes'))


app.listen('3000');