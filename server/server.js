// const createError = require('http-errors');
// const logger = require('morgan');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('../client/public.index.html'));
const db = require('../database/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// open up CORS 
// app.use((_, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.use(logger('dev'));

// You can place your routes here, feel free to refactor:
// const { example } = require('./routes');
// app.use('/api/example', example)

app.get('/itineraries', (req, res) => {
    console.log('queries', req)
    res.send(req);
    // db.findAll((err, activities) => {
    //     if (err) {
    //         console.log('error returning from db', err);
    //         res.statusCode = 400;
    //         res.end();
    //     } else {
    //         console.log(res.data);
    //         res.end();
    // }
})
// })

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(port, () => { console.log(`now listening on port: ${port}`) })

// module.exports = app;