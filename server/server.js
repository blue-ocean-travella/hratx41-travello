// const createError = require('http-errors');
// const logger = require('morgan');
const express = require('express');
const app = express();


express.static('../client/public');








var port = process.env.PORT || 8080;
app.listen(port, ()=>{console.log(`listening at ${port}`)})


module.exports = app;