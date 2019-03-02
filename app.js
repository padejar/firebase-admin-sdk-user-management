let express = require("express"); // Load express module
let bodyParser = require("body-parser"); // Load body-parser module
let userRouter = require('./routes/userRouter'); // Load user router module

// Express
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use('/users',userRouter);

// Server
app.listen(3000);
console.log('API is running on port 3000');
