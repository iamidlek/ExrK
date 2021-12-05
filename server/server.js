var express = require("express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var boardRouter = require("./routes/boardRouter");

var app = express();

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/board", boardRouter);

module.exports = app;
