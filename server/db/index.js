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

module.exports = connect;