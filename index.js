const express = require('express');
const app = express();
const port = 8002;
// required db
const db = require('./config/mongoose');


// use express router
app.use('/', require('./routes'));

// set up view engine 
app.set('view engine','ejs');
app.set('views','./views');

// used static files
app.use(express.static('./assets'));
// middleware to read url request
app.use(express.urlencoded());

// used express routes
app.use('/',require('./routes/index'));



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});