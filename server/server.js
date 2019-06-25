// const createError = require('http-errors');
// const logger = require('morgan');
const express = require('express');
const app = express();

//json file stored on the server;
const locationData = require('./locationData.json');
const userData = require('./user.json');
console.log(locationData)
const mongoose = require('mongoose');
const mongopath = 'mongodb://localhost/travella';

mongoose.connect(mongopath, {useNewUrlParser: true});

app.use(express.static('../client/public'));

const connect = mongoose.connection;
connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', function() {
   //you can write mongo native syntax in here once connected.
    // console.log(connect, 'this is your connect')
    console.log('hi');
    connect.dropCollection("users", (err, result)=> {if (err){ console.log('error delete collection')
  } else {console.log('delete users collection success');}});

  connect.dropCollection("locations", (err, result)=> {if (err){ console.log('error delete collection')
} else {console.log('delete locations collection success');}});
    
    var userSchema = mongoose.Schema({
        name: String,
        itinerary: []
    });

    var locationSchema = mongoose.Schema({
      name: String,
      address: String,
      long: Number,
      lat: Number,
      photo: String,
      rating: Number,
      userRating: Number,
      place_id: String

  });
  
  var User = mongoose.model('users', userSchema);
  var Location = mongoose.model('locations', locationSchema);

  User.collection.insertMany(userData, function(err,r) {
      if(err) {console.log(err)}
      console.log('successful insertMany into users');
  })

  Location.collection.insertMany(locationData.nightLife, function(err,r) {
    if(err) {console.log(err)}
    console.log('successful insertMany into location');
})
});

//storing the userName 
app.get('/postUser/:name', (req, res)=>{
   console.log(req)
   console.log(req.params.name);
   res.end();

})


var port = process.env.PORT || 8080;
app.listen(port, ()=>{console.log(`listening at ${port}`)})

module.exports = app;




//   var Location = mongoose.model
//   var oneUser = new User ({name:'Louis'});

//   oneUser.save((function (err, oneUser) {
//     if (err) return console.error(err);
//     console.log(oneUser.name + " saved to bookstore collection.");
//   })
// )

  // user.collection.insertMany({name:'Louis'}, (err,docs)=>{if (err) {console.log(err)} else {console.log('docs inserted')}});

// open up CORS 
// app.use((_, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });



// app.use(logger('dev'));

// // You can place your routes here, feel free to refactor:
// const { example } = require('./routes');
// app.use('/api/example', example)

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });