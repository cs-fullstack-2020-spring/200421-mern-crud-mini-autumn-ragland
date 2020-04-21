// create server
let express = require('express');
let app = express();
// define port number variable
let port = 8000;

// import router module
let api = require('./routes/api');

// mount routes
app.use('/api', api);

// CONNECTING TO A MONGO DB DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = 'mongodb+srv://admin:C0d3Cr3w@cluster0-ueqkv.mongodb.net/cs_database_4?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// server listening on port
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})