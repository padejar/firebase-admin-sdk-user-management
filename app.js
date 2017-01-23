var express = require("express"); // Load express module
var bodyParser = require("body-parser"); // Load body-parser module
var userRouter = require('./routes/userRouter'); // Load user router module

// Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use('/users',userRouter);

// Server
app.listen(3000);
console.log('API is running on port 3000');