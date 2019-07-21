const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/authors');
require("./server/config/mongoose");

require("./server/config/routes")(app);

app.listen(8000, ()=>{
    console.log(`Listening on PORT: 8000!`);
});