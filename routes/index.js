const express = require("express");
const router = express.Router();

let Todo = require("../models/todo");

// route for when the user views the index of the website
router.get("/", function(req, res) {
  Todo.find( function(err, result) {
    if (err) throw err;

    res.render("index", { todos: result });
  });
});


module.exports = router;
