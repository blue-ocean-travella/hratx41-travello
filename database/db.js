// THIS IS THE MONGODB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
//const dbinfo = require('./atlasinfo.js');

mongoose.connect('mongodb://localhost:27017/itineraries', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('error connecting to Travella mongodb: ', err);
    } else {
        console.log("successful connection to Travella mongodb");
    }
});


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

// const createRecord = (obj, cb) => {
//     itinerary.create(obj, (err, data) => {
//         if (err) {
//             console.log('error inserting record', err);
//         } else {
//             console.log('record successfully entered', data);
//             cb(null, data);
//         }
//     })
// }

// const readRecord = (obj, cb) => {
//     restaurant.findOne(obj, (err, data) => {
//         if (err) {
//             console.log('error retrieving record', err);
//             cb(err, null);
//         } else {
//             console.log('record successfully retrieved', data);
//             cb(null, data);
//         }
//     })
// }

const findAll = (obj, callback) => {
    itinerary.find(obj, (err, activities) => {
        if (err) {
            console.log('error reading db', err);
        }
        callback(null, activities);
    })
}

// const updateRecord = (target, obj, cb) => {
//     restaurant.updateOne(target, obj, (err, data) => {
//         if (err) {
//             console.log('error retrieveing record', err)
//         } else {
//             console.log('record successfully updated', data)
//             cb(null, data)
//         }
//     })
// }

// const deleteRecord = (obj, cb) => {
//     restaurant.deleteOne(obj, (err, data) => {
//         if (err) {
//             console.log('error deleting record', err)
//             cb(err, null);
//         } else {
//             console.log('record deleted successfully', data);
//             cb(null, err);
//         }
//     })
// }

// createRecord({
//     uuid: 1,
//     username: 'Lucy',
//     city: 'Phuket',
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



module.exports = { findAll };