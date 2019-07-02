// const createError = require('http-errors');
// const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.use(express.static('../client/public'));
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
    // console.log('q', req.query)
    let id = req.query.uuid;
    db.findOne({ uuid: id }, (err, data) => {
        if (err) {
            console.log('server error reading record: ', id)
            res.end();
        } else {
            if (data.length === 0) {
                console.log('error: record does not exist: ', id);
                res.send(undefined);
            } else {
                console.log('server succesfully read record:', data)
                res.send(data);
            }
        }
    })
})

app.delete('/itineraries', (req, res) => {
    // console.log('delete req', req.query);
    let id = req.query.uuid;
    db.deleteItinerary({ uuid: id }, (err, data) => {
        if (err) {
            console.log('error deleting record: ', id);
            res.send('record not found');
        } else {
            console.log('server successfully deleted record: ', id);
            res.end();
        }
    })
})

app.delete('/activity', (req, res) => {
    // console.log('delete one', req.query)
    let id = req.query.uuid;
    let name = req.query.name;
    db.deleteActivity({ uuid: id, name: name }, (err, data) => {
        if (err) {
            console.log('error deleting activity');
        } else {
            console.log('server successfully deleted activity', name);
            res.send(data);
        }
    })
})

app.put('/activity', (req, res) => {
    let id = 1;
    let activity = req.query.destination;
    let city = req.query.city;

    db.insertActivity({ uuid: id, city: city, activity: activity }, (err, data) => {
        if (err) {
            console.log('error inserting single');
        } else {
            console.log('server successfully inserted activity', activity);
            res.send(data)
        }
    })
})

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