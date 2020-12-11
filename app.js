const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);


//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
   console.log('connected to db');
});

//How do we start listening to the server?
app.listen(3333);