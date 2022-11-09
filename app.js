// importing modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./configs/database");
const app = express();

// making the connection to mongo database
mongoose.connect(db.config.uri, db.config.options);

// setting the template engine to use ejs.
app.set("view engine", "ejs");

// middlewares for express routes
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// express routes that exist
app.use('/add', require('./routes/add'));
app.use('/remove', require('./routes/remove'));
app.use('/edit', require('./routes/edit'));
app.use('/', require('./routes/index'));



app.listen(process.env.PORT || 5000, function () {
  console.log("listening on port 5000!");
});