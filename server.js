var express = require('express'); //gives access to entire express api

// Create our app

var app = express();

// specifies folder name to expose to the server
app.use(express.static('public'));


// starts server
// argument are port and function to run
app.listen(3000, function () {
    console.log('express server is up on port 3000')
})