//json file stored on the server;
const locationData = require('./locationData.json');
const userData = require('./user.json');
// console.log(locationData)
const mongoose = require('mongoose');
const mongopath = 'mongodb://localhost/travella';

mongoose.connect(mongopath, {useNewUrlParser: true});

const connect = mongoose.connection;


connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', function() {
   //you can write mongo native syntax in here once connected.
    // console.log(connect, 'this is your connect')
    console.log('hi');
    connect.dropCollection("users", (err, result)=> {if (err){ console.log('error delete collection')
  } else {console.log('delete users collection success');}});

  connect.dropCollection("restaurants", (err, result)=> {if (err){ console.log('error delete restaurants collection')
} else {console.log('delete restaurants collection success');}});
connect.dropCollection("nightlifes", (err, result)=> {if (err){ console.log('error delete nightlifes collection')
} else {console.log('delete nightlifes collection success');}});
connect.dropCollection("daytrips", (err, result)=> {if (err){ console.log('error delete daytrips collection')
} else {console.log('delete daytrips collection success');}});
connect.dropCollection("thingstodos", (err, result)=> {if (err){ console.log('error delete thingstodos collection')
} else {console.log('delete thingstodos collection success');}});

User.collection.insertMany(userData, function(err,r) {
  if(err) {console.log(err)}
  console.log('successful insertMany into users');
  })
  
  NightLife.collection.insertMany(locationData.nightLife, function(err,r) {
  if(err) {console.log(err)}
  console.log('successful insertMany into nightlife');
  })
  
  Restaurant.collection.insertMany(locationData.restaurants, function(err,r) {
  if(err) {console.log(err)}
  console.log('successful insertMany into restaurant');
  })
  
  DayTrip.collection.insertMany(locationData.dayTrips, function(err,r) {
  if(err) {console.log(err)}
  console.log('successful insertMany into daytrip');
  })
  
  ThingsToDo.collection.insertMany(locationData.thingsToDo, function(err,r) {
  if(err) {console.log(err)}
  console.log('successful insertMany into things to do');
  })
});

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
var NightLife= mongoose.model('nightlifes', locationSchema);
var Restaurant= mongoose.model('restaurants', locationSchema);
var DayTrip= mongoose.model('daytrips', locationSchema);
var ThingsToDo= mongoose.model('thingstodos', locationSchema);







module.exports = {connect, User, NightLife, Restaurant, DayTrip, ThingsToDo};