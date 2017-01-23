var express = require("express");
var bodyParser = require("body-parser");
var userRouter = require('./routes/userRouter');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use('/users',userRouter);

// Server
app.listen(3000);
console.log('API is running on port 3000');