//json file stored on the server;
const locationData = require('./locationData.json');
const userData = require('./user.json');
// console.log(locationData)
const mongoose = require('mongoose');
const mongopath = 'mongodb://localhost:27017/itineraries';

mongoose.connect(mongopath, {useNewUrlParser: true});

const connect = mongoose.connection;


connect.on('error', console.error.bind(console, 'connection error:'));
connect.once('open', function() {
   //you can write mongo native syntax in here once connected.
    // console.log(connect, 'this is your connect')
    console.log('hi');
//     connect.dropCollection("users", (err, result)=> {if (err){ console.log('error delete collection')
//   } else {console.log('delete users collection success');}});

//   connect.dropCollection("restaurants", (err, result)=> {if (err){ console.log('error delete restaurants collection')
// } else {console.log('delete restaurants collection success');}});
// connect.dropCollection("nightlifes", (err, result)=> {if (err){ console.log('error delete nightlifes collection')
// } else {console.log('delete nightlifes collection success');}});
// connect.dropCollection("daytrips", (err, result)=> {if (err){ console.log('error delete daytrips collection')
// } else {console.log('delete daytrips collection success');}});
// connect.dropCollection("thingstodos", (err, result)=> {if (err){ console.log('error delete thingstodos collection')
// } else {console.log('delete thingstodos collection success');}

});

// User.collection.insertMany(userData, function(err,r) {
//   if(err) {console.log(err)}
//   console.log('successful insertMany into users');
//   })
  
//   NightLife.collection.insertMany(locationData.nightLife, function(err,r) {
//   if(err) {console.log(err)}
//   console.log('successful insertMany into nightlife');
//   })
  
//   Restaurant.collection.insertMany(locationData.restaurants, function(err,r) {
//   if(err) {console.log(err)}
//   console.log('successful insertMany into restaurant');
//   })
  
//   DayTrip.collection.insertMany(locationData.dayTrips, function(err,r) {
//   if(err) {console.log(err)}
//   console.log('successful insertMany into daytrip');
//   })
  
//   ThingsToDo.collection.insertMany(locationData.thingsToDo, function(err,r) {
//   if(err) {console.log(err)}
//   console.log('successful insertMany into things to do');
//   })
// });

// var userSchema = mongoose.Schema({
//   name: String,
//   itinerary: []
// });

// var locationSchema = mongoose.Schema({
// name: String,
// address: String,
// long: Number,
// lat: Number,
// photo: String,
// rating: Number,
// userRating: Number,
// place_id: String

// });

// var User = mongoose.model('users', userSchema);
// var NightLife= mongoose.model('nightlifes', locationSchema);
// var Restaurant= mongoose.model('restaurants', locationSchema);
// var DayTrip= mongoose.model('daytrips', locationSchema);
// var ThingsToDo= mongoose.model('thingstodos', locationSchema);

// /////////////////CRUDS//////////////////////////////

// const deleteData = (obj, cb) => {
//   User.deleteOne(obj, function (err, info) {
//       if (err) {
//           console.log(err);
//       } else {
//           console.log(info);
//           cb(null, info);
//           // console.log('db info', info)
//       }
//   });
// };

// const findData = (obj, cb) => {
//   User.findOne(obj, function (err, info) {
//       if (err) {
//           console.log(err);
//       } else {
//           // console.log(info);
//           cb(null, info);
//           // console.log('db info', info)
//       }
//   });
// };

// const updateData = (query, change, cb) => {
//   User.updateOne(query, change, (err, info) => {
//       if (err) {
//           console.log(err);
//       } else {
//           cb(null, info);
//       }
//   });
// };


// const insertData = (object, cb) => {
//   User.insertMany(object, (err, info) => {
//       if (err) {
//           console.log(err);
//       } else {
//           cb(null, info);
//       }
//   });
// };

/////////////////CRUDS//////////////////////////////


const itinerarySchema = mongoose.Schema({
  uuid: Number,
  username: String,
  city: String,
  activities: [{
      name: String,
      duration: Number,
      description: String,
      startTime: String,
      category: String,
      hoursOfOperation: [String],
      longitude: Number,
      latitude: Number,
      numberOfReviews: Number,
      rating: Number,
      address: String,
      open: Boolean,
      phone: String,
      website: String,
      images: [String]
  }]
});

// might need to add another itinerary string after itinerarySchema

const itinerary = mongoose.model('itinerary', itinerarySchema);

const createRecord = (obj) => {
  itinerary.create(obj, (err, data) => {
      if (err) {
          console.log('error inserting record', err);
      } else {
          console.log('record successfully entered', data);
          // cb(null, data);
      }
  })
}

const insertActivity = (obj, cb) => {
  console.log('inserting activity to db: ', obj)
  itinerary.update(
      { uuid: obj.uuid },
      { city: obj.city },
      { $push: { 'activities': obj.activity } }, (err, data) => {
          if (err) {
              console.log('error inserting activity into db: ', err)
          } else {
              console.log('activity successfully inserted into db: ', obj.activity)
              cb(null, data);
          }
      }
  )
}


const findOne = (obj, callback) => {
  console.log('db obj: ', obj);
  itinerary.find(obj, (err, activities) => {
      if (err) {
          console.log('error reading db', err);
      }
      console.log('activities: ', activities);
      callback(null, activities);
  })
}


const deleteItinerary = (obj, cb) => {
  // console.log('inside database delete', obj)
  itinerary.deleteOne(obj, (err, data) => {
      if (err) {
          console.log('error deleting record', err)
          cb(err, null);
      } else {
          console.log('record deleted successfully', data);
          cb(null, data);
      }
  })
}

const deleteActivity = (obj, cb) => {
  // console.log('inside database delete activity', obj)
  itinerary.update(
      { uuid: obj.uuid },
      { $pull: { 'activities': { name: obj.name } } }, (err, data) => {
          if (err) {
              console.log('error deleting activity', err)
              cb(err, null);
          } else {
              console.log('activity deleted successfully', data);
              cb(null, data);
          }
      })
}

// createRecord({
//     uuid: 1,
//     username: 'Lucy',
//     city: 'Paris',
//     activities:
//         [{
//             name: 'Barton Springs',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '4:00 PM',
//             category: 'nightLife',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: -97.7729,
//             latitude: 30.2670,
//             numberOfReviews: 40,
//             rating: 5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.bartonsprings.com',
//             images: ['https://ak6.picdn.net/shutterstock/videos/1021179886/thumb/1.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Sensoji Temple',
//             duration: 3,
//             description: 'lorem ipsum',
//             startTime: '7:00 PM',
//             category: 'thingsToDo',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: 139.796783,
//             latitude: 35.714661,
//             numberOfReviews: 4000,
//             rating: 3.5,
//             open: true,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.sensojitemple.com',
//             images: ['https://www.touropia.com/gfx/d/tourist-attractions-in-tokyo/sensoji_temple.jpg?v=29a16b16edae6dc242531c1dd1fb3188', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Eiffel Tower',
//             duration: 1,
//             description: 'This is a description of whatever item is located to the left.  This will be lorem ipsum until we can get the actual description from our APi.  I have to keep typing to make this really long so I can style my containers and make sure that the overflow is handled correctly.  That is so much funnnnnnnnnnnn!',
//             startTime: '2:00 PM',
//             category: 'topSpots',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: 2.2945,
//             latitude: 48.8584,
//             numberOfReviews: 175,
//             rating: 4,
//             open: true,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.eiffeltower.com',
//             images: ['https://img.jakpost.net/c/2017/02/10/2017_02_10_21340_1486708892._large.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Wat Chalong',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '8:00 AM',
//             category: 'thingsToDo',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: 98.3366,
//             latitude: 7.8470,
//             numberOfReviews: 995,
//             rating: 4.5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.watchalong.com',
//             images: ['http://static.asiawebdirect.com/m/.imaging/1270x846/website/phuket/portals/phuket-com/homepage/island/wat-chalong/allParagraphs/BucketComponent/ListingContainer/05/image.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Colosseum',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '10:00 AM',
//             category: 'thingsToDo',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: 12.4922,
//             latitude: 41.8902,
//             numberOfReviews: 47523,
//             rating: 5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.colosseum.com',
//             images: ['https://cdn.getyourguide.com/img/tour_img-391985-148.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Tao Downtown',
//             duration: 5,
//             description: 'lorem ipsum',
//             startTime: '11:00 PM',
//             category: 'restaurants',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: 74.0038,
//             latitude: 40.7425,
//             numberOfReviews: 5733,
//             rating: 5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.taodowntown.com',
//             images: ['https://cdn.vox-cdn.com/thumbor/o3PSr4afAPKUlXq0tx_KQvnvbfQ=/0x0:2000x1335/1200x675/filters:focal(845x675:1165x995)/cdn.vox-cdn.com/uploads/chorus_image/image/54072579/2017_04_03_TAO_016.0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'The Sphinx',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '1:00 PM',
//             category: 'topSpots',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: 31.1376,
//             latitude: 29.9753,
//             numberOfReviews: 90004,
//             rating: 5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.thesphinx.com',
//             images: ['https://cdn.cnn.com/cnnnext/dam/assets/180918120717-giza-sphinx.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Launderette',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '7:00 AM',
//             category: 'restaurants',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: -97.722782,
//             latitude: 30.252209,
//             numberOfReviews: 1025,
//             rating: 5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.launderette.com',
//             images: ['https://cdn.vox-cdn.com/thumbor/SAhA2s5_LXH9wQ_w-SFIYp3tcsA=/49x0:848x599/1200x800/filters:focal(49x0:848x599)/cdn.vox-cdn.com/uploads/chorus_image/image/49800653/Photo_Feb_13__12_43_22.0.0.0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Iguazu Falls',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '3:00 PM',
//             category: 'dayTrips',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: -54.436689,
//             latitude: -25.694683,
//             numberOfReviews: 86543,
//             rating: 5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.iquazufalls.com',
//             images: ['https://res-5.cloudinary.com/enchanting/w_768,h_512,c_fill/et-web/2015/06/1600-Iguazu-Falls-Argentina-shutterstock_172190801.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Grace Bay',
//             duration: 3,
//             description: 'lorem ipsum',
//             startTime: '5:00 PM',
//             category: 'dayTrips',
//             hoursOfOperation: [
//                 'sunday: 12:00 PM - 5:00 PM',
//                 'monday: 8:00 AM - 10:00 PM',
//                 'tuesday: 8:00 AM - 10:00 PM',
//                 'wednesday: 8:00 AM - 11:00 PM',
//                 'thursday: 8:00 AM - 11:00 PM',
//                 'friday: 8:00 AM - 12:00 AM',
//                 'saturday: 8:00 AM - 12:00 AM'
//             ],
//             longitude: 72.1683,
//             latitude: 21.7997,
//             numberOfReviews: 98658,
//             rating: 5,
//             open: false,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.gracebay.com',
//             images: ['https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Sands-950x530.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         }]
// }
// );


// createRecord({
// uuid: 2,
//     username: 'Carol',
//         city: 'New York',
//             activities:
// [{
//     name: 'Elmo',
//     duration: 1,
//     description: 'lorem ipsum',
//     startTime: '7:00 AM',
//     category: 'restaurants',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 74.0060,
//     latitude: 40.7128,
//     numberOfReviews: 5490,
//     rating: 4,
//     open: true,
//     address: '1990 Avenue of the Americas',
//     phone: '555-555-5555',
//     website: 'http://www.elmo.com',
//     images: ['https://resizer.otstatic.com/v2/photos/large/25103568.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Statue of Liberty',
//     duration: 2,
//     description: 'lorem ipsum',
//     startTime: '8:00 AM',
//     category: 'topSpots',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 74.0445,
//     latitude: 40.6892,
//     numberOfReviews: 570983,
//     rating: 5,
//     open: true,
//     address: 'Liberty Island',
//     phone: '555-555-5555',
//     website: 'http://www.statueofliberty.com',
//     images: ['https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1600x900/format/jpg/quality/85/https%3A%2F%2Fstatic.makers.com%2Ffield%2Fimage%2FStatueOfLiberty_0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Museum of Modern Art',
//     duration: 1,
//     description: 'This is a description of whatever item is located to the left.  This will be lorem ipsum until we can get the actual description from our APi.  I have to keep typing to make this really long so I can style my containers and make sure that the overflow is handled correctly.  That is so much funnnnnnnnnnnn!',
//     startTime: '10:00 AM',
//     category: 'topSpots',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 73.9776,
//     latitude: 40.7614,
//     numberOfReviews: 90654,
//     rating: 4.5,
//     open: true,
//     address: '560 W. 53rd St.',
//     phone: '555-555-5555',
//     website: 'http://www.moma.com',
//     images: ['https://cdn-imgix-open.headout.com/blog/New+York/Museum+of+Modern+Art+NYC.jpeg?auto=compress&fm=webp&w=1200&h=750&crop=faces&fit=min', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Wat Chalong',
//     duration: 2,
//     description: 'lorem ipsum',
//     startTime: '8:00 AM',
//     category: 'thingsToDo',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 98.3366,
//     latitude: 7.8470,
//     numberOfReviews: 995,
//     rating: 4.5,
//     open: false,
//     address: '119 Nueces St., Austin, TX 78741',
//     phone: '555-555-5555',
//     website: 'http://www.watchalong.com',
//     images: ['http://static.asiawebdirect.com/m/.imaging/1270x846/website/phuket/portals/phuket-com/homepage/island/wat-chalong/allParagraphs/BucketComponent/ListingContainer/05/image.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Colosseum',
//     duration: 2,
//     description: 'lorem ipsum',
//     startTime: '10:00 AM',
//     category: 'thingsToDo',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 12.4922,
//     latitude: 41.8902,
//     numberOfReviews: 47523,
//     rating: 5,
//     open: false,
//     address: '119 Nueces St., Austin, TX 78741',
//     phone: '555-555-5555',
//     website: 'http://www.colosseum.com',
//     images: ['https://cdn.getyourguide.com/img/tour_img-391985-148.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Tao Downtown',
//     duration: 5,
//     description: 'lorem ipsum',
//     startTime: '11:00 PM',
//     category: 'restaurants',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 74.0038,
//     latitude: 40.7425,
//     numberOfReviews: 5733,
//     rating: 5,
//     open: false,
//     address: '119 Nueces St., Austin, TX 78741',
//     phone: '555-555-5555',
//     website: 'http://www.taodowntown.com',
//     images: ['https://cdn.vox-cdn.com/thumbor/o3PSr4afAPKUlXq0tx_KQvnvbfQ=/0x0:2000x1335/1200x675/filters:focal(845x675:1165x995)/cdn.vox-cdn.com/uploads/chorus_image/image/54072579/2017_04_03_TAO_016.0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'The Sphinx',
//     duration: 1,
//     description: 'lorem ipsum',
//     startTime: '1:00 PM',
//     category: 'topSpots',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 31.1376,
//     latitude: 29.9753,
//     numberOfReviews: 90004,
//     rating: 5,
//     open: false,
//     address: '119 Nueces St., Austin, TX 78741',
//     phone: '555-555-5555',
//     website: 'http://www.thesphinx.com',
//     images: ['https://cdn.cnn.com/cnnnext/dam/assets/180918120717-giza-sphinx.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Launderette',
//     duration: 2,
//     description: 'lorem ipsum',
//     startTime: '7:00 AM',
//     category: 'restaurants',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: -97.722782,
//     latitude: 30.252209,
//     numberOfReviews: 1025,
//     rating: 5,
//     open: false,
//     address: '119 Nueces St., Austin, TX 78741',
//     phone: '555-555-5555',
//     website: 'http://www.launderette.com',
//     images: ['https://cdn.vox-cdn.com/thumbor/SAhA2s5_LXH9wQ_w-SFIYp3tcsA=/49x0:848x599/1200x800/filters:focal(49x0:848x599)/cdn.vox-cdn.com/uploads/chorus_image/image/49800653/Photo_Feb_13__12_43_22.0.0.0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Iguazu Falls',
//     duration: 2,
//     description: 'lorem ipsum',
//     startTime: '3:00 PM',
//     category: 'dayTrips',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: -54.436689,
//     latitude: -25.694683,
//     numberOfReviews: 86543,
//     rating: 5,
//     open: false,
//     address: '119 Nueces St., Austin, TX 78741',
//     phone: '555-555-5555',
//     website: 'http://www.iquazufalls.com',
//     images: ['https://res-5.cloudinary.com/enchanting/w_768,h_512,c_fill/et-web/2015/06/1600-Iguazu-Falls-Argentina-shutterstock_172190801.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// },
// {
//     name: 'Grace Bay',
//     duration: 3,
//     description: 'lorem ipsum',
//     startTime: '5:00 PM',
//     category: 'dayTrips',
//     hoursOfOperation: [
//         'sunday: 12:00 PM - 5:00 PM',
//         'monday: 8:00 AM - 10:00 PM',
//         'tuesday: 8:00 AM - 10:00 PM',
//         'wednesday: 8:00 AM - 11:00 PM',
//         'thursday: 8:00 AM - 11:00 PM',
//         'friday: 8:00 AM - 12:00 AM',
//         'saturday: 8:00 AM - 12:00 AM'
//     ],
//     longitude: 72.1683,
//     latitude: 21.7997,
//     numberOfReviews: 98658,
//     rating: 5,
//     open: false,
//     address: '119 Nueces St., Austin, TX 78741',
//     phone: '555-555-5555',
//     website: 'http://www.gracebay.com',
//     images: ['https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Sands-950x530.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
// }]
// }
// );



module.exports = { findOne, deleteItinerary, deleteActivity, insertActivity };
