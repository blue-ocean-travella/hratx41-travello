// THIS IS THE MONGODB

const mongoose = require('mongoose');
const fs = require('fs');
//const dbinfo = require('./atlasinfo.js');

mongoose.connect('mongodb://localhost:27017/itineraries', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('error connecting to Travella mongodb: ', err);
    } else {
        console.log("successful connection to Travella mongodb");
    }
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'coinnection error:'));

const Schema = mongoose.Schema;

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

createRecord({
    uuid: 1,
    username: 'Lucy',
    city: 'Paris',
    activities:
        [{
            name: 'Barton Springs',
            duration: 2,
            description: 'lorem ipsum',
            startTime: '4:00 PM',
            category: 'nightLife',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: -97.7729,
            latitude: 30.2670,
            numberOfReviews: 40,
            rating: 5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.bartonsprings.com',
            images: ['https://ak6.picdn.net/shutterstock/videos/1021179886/thumb/1.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Sensoji Temple',
            duration: 3,
            description: 'lorem ipsum',
            startTime: '7:00 PM',
            category: 'thingsToDo',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: 139.796783,
            latitude: 35.714661,
            numberOfReviews: 4000,
            rating: 3.5,
            open: true,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.sensojitemple.com',
            images: ['https://www.touropia.com/gfx/d/tourist-attractions-in-tokyo/sensoji_temple.jpg?v=29a16b16edae6dc242531c1dd1fb3188', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Eiffel Tower',
            duration: 1,
            description: 'This is a description of whatever item is located to the left.  This will be lorem ipsum until we can get the actual description from our APi.  I have to keep typing to make this really long so I can style my containers and make sure that the overflow is handled correctly.  That is so much funnnnnnnnnnnn!',
            startTime: '2:00 PM',
            category: 'topSpots',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: 2.2945,
            latitude: 48.8584,
            numberOfReviews: 175,
            rating: 4,
            open: true,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.eiffeltower.com',
            images: ['https://img.jakpost.net/c/2017/02/10/2017_02_10_21340_1486708892._large.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Wat Chalong',
            duration: 2,
            description: 'lorem ipsum',
            startTime: '8:00 AM',
            category: 'thingsToDo',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: 98.3366,
            latitude: 7.8470,
            numberOfReviews: 995,
            rating: 4.5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.watchalong.com',
            images: ['http://static.asiawebdirect.com/m/.imaging/1270x846/website/phuket/portals/phuket-com/homepage/island/wat-chalong/allParagraphs/BucketComponent/ListingContainer/05/image.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Colosseum',
            duration: 2,
            description: 'lorem ipsum',
            startTime: '10:00 AM',
            category: 'thingsToDo',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: 12.4922,
            latitude: 41.8902,
            numberOfReviews: 47523,
            rating: 5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.colosseum.com',
            images: ['https://cdn.getyourguide.com/img/tour_img-391985-148.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Tao Downtown',
            duration: 5,
            description: 'lorem ipsum',
            startTime: '11:00 PM',
            category: 'restaurants',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: 74.0038,
            latitude: 40.7425,
            numberOfReviews: 5733,
            rating: 5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.taodowntown.com',
            images: ['https://cdn.vox-cdn.com/thumbor/o3PSr4afAPKUlXq0tx_KQvnvbfQ=/0x0:2000x1335/1200x675/filters:focal(845x675:1165x995)/cdn.vox-cdn.com/uploads/chorus_image/image/54072579/2017_04_03_TAO_016.0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'The Sphinx',
            duration: 1,
            description: 'lorem ipsum',
            startTime: '1:00 PM',
            category: 'topSpots',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: 31.1376,
            latitude: 29.9753,
            numberOfReviews: 90004,
            rating: 5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.thesphinx.com',
            images: ['https://cdn.cnn.com/cnnnext/dam/assets/180918120717-giza-sphinx.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Launderette',
            duration: 2,
            description: 'lorem ipsum',
            startTime: '7:00 AM',
            category: 'restaurants',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: -97.722782,
            latitude: 30.252209,
            numberOfReviews: 1025,
            rating: 5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.launderette.com',
            images: ['https://cdn.vox-cdn.com/thumbor/SAhA2s5_LXH9wQ_w-SFIYp3tcsA=/49x0:848x599/1200x800/filters:focal(49x0:848x599)/cdn.vox-cdn.com/uploads/chorus_image/image/49800653/Photo_Feb_13__12_43_22.0.0.0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Iguazu Falls',
            duration: 2,
            description: 'lorem ipsum',
            startTime: '3:00 PM',
            category: 'dayTrips',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: -54.436689,
            latitude: -25.694683,
            numberOfReviews: 86543,
            rating: 5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.iquazufalls.com',
            images: ['https://res-5.cloudinary.com/enchanting/w_768,h_512,c_fill/et-web/2015/06/1600-Iguazu-Falls-Argentina-shutterstock_172190801.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        },
        {
            name: 'Grace Bay',
            duration: 3,
            description: 'lorem ipsum',
            startTime: '5:00 PM',
            category: 'dayTrips',
            hoursOfOperation: [
                'sunday: 12:00 PM - 5:00 PM',
                'monday: 8:00 AM - 10:00 PM',
                'tuesday: 8:00 AM - 10:00 PM',
                'wednesday: 8:00 AM - 11:00 PM',
                'thursday: 8:00 AM - 11:00 PM',
                'friday: 8:00 AM - 12:00 AM',
                'saturday: 8:00 AM - 12:00 AM'
            ],
            longitude: 72.1683,
            latitude: 21.7997,
            numberOfReviews: 98658,
            rating: 5,
            open: false,
            address: '119 Nueces St., Austin, TX 78741',
            phone: '555-555-5555',
            website: 'http://www.gracebay.com',
            images: ['https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Sands-950x530.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
        }]
}
);


// createRecord({
//     uuid: 2,
//     username: 'Carol',
//     city: 'New York',
//     activities:
//         [{
//             name: 'Elmo',
//             duration: 1,
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
//             longitude: 74.0060,
//             latitude: 40.7128,
//             numberOfReviews: 5490,
//             rating: 4,
//             open: true,
//             address: '1990 Avenue of the Americas',
//             phone: '555-555-5555',
//             website: 'http://www.elmo.com',
//             images: ['https://resizer.otstatic.com/v2/photos/large/25103568.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Statue of Liberty',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '8:00 AM',
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
//             longitude: 74.0445,
//             latitude: 40.6892,
//             numberOfReviews: 570983,
//             rating: 5,
//             open: true,
//             address: 'Liberty Island',
//             phone: '555-555-5555',
//             website: 'http://www.statueofliberty.com',
//             images: ['https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1600x900/format/jpg/quality/85/https%3A%2F%2Fstatic.makers.com%2Ffield%2Fimage%2FStatueOfLiberty_0.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Museum of Modern Art',
//             duration: 1,
//             description: 'This is a description of whatever item is located to the left.  This will be lorem ipsum until we can get the actual description from our APi.  I have to keep typing to make this really long so I can style my containers and make sure that the overflow is handled correctly.  That is so much funnnnnnnnnnnn!',
//             startTime: '10:00 AM',
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
//             longitude: 73.9776,
//             latitude: 40.7614,
//             numberOfReviews: 90654,
//             rating: 4.5,
//             open: true,
//             address: '560 W. 53rd St.',
//             phone: '555-555-5555',
//             website: 'http://www.moma.com',
//             images: ['https://cdn-imgix-open.headout.com/blog/New+York/Museum+of+Modern+Art+NYC.jpeg?auto=compress&fm=webp&w=1200&h=750&crop=faces&fit=min', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Brooklyn Bridge',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '11:00 AM',
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
//             longitude: 73.9969,
//             latitude: 40.7061,
//             numberOfReviews: 10784,
//             rating: 5,
//             open: true,
//             address: '750 Halsey Ave.',
//             phone: '555-555-5555',
//             website: 'http://www.brooklynbridge.com',
//             images: ['https://cdn.britannica.com/80/115080-004-A05AB44F.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Sons of Essex',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '12:00 PM',
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
//             longitude: 73.9876,
//             latitude: 40.7202,
//             numberOfReviews: 6543,
//             rating: 4,
//             open: true,
//             address: '778 Essex St.',
//             phone: '555-555-5555',
//             website: 'http://www.sonsofessex.com',
//             images: ['https://media-cdn.tripadvisor.com/media/photo-s/03/1e/8f/6d/sons-of-essex.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Guggenheim',
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
//             longitude: 73.9590,
//             latitude: 40.7830,
//             numberOfReviews: 66033,
//             rating: 5,
//             open: false,
//             address: '1800 E. 81st St.',
//             phone: '555-555-5555',
//             website: 'http://www.guggenheim.com',
//             images: ['https://d21xlh2maitm24.cloudfront.net/nyc/Guggenheim.jpg?mtime=20161117125141', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Central Park',
//             duration: 2,
//             description: 'lorem ipsum',
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
//             longitude: 73.9654,
//             latitude: 40.7829,
//             numberOfReviews: 1098264,
//             rating: 5,
//             open: false,
//             address: '1000 W. 59th St.',
//             phone: '555-555-5555',
//             website: 'http://www.centralpark.com',
//             images: ['https://images.adsttc.com/media/images/5bc8/acfb/f197/cc77/5000/08ea/slideshow/01_Alternative-Central-Park-1.jpg?1539878130', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Jane\'s Carousel',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '4:00 AM',
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
//             longitude: 73.9924,
//             latitude: 40.7046,
//             numberOfReviews: 12599,
//             rating: 5,
//             open: true,
//             address: '75 Waterfront Blvd.',
//             phone: '555-555-5555',
//             website: 'http://www.janescarousel.com',
//             images: ['https://www.janescarousel.com/assets/carousel-bg-home.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
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
//             name: 'House of Yes',
//             duration: 3,
//             description: 'lorem ipsum',
//             startTime: '12:00 AM',
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
//             longitude: 74.0038,
//             latitude: 40.7425,
//             numberOfReviews: 6763,
//             rating: 5,
//             open: true,
//             address: '8976 Schemerhorn Ave.',
//             phone: '555-555-5555',
//             website: 'http://www.houseofyes.com',
//             images: ['https://blogmedia.evbstatic.com/wp-content/uploads/rally-legacy/2018/07/09155424/5-Can%E2%80%99t-Miss-House-of-Yes-Experiences-This-Summer-1-1500x750.png', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         }]
// }
// );

// createRecord({
//     uuid: 3,
//     username: 'Mario',
//     city: 'Tokyo',
//     activities:
//         [{
//             name: 'Ivy Place',
//             duration: 1,
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
//             longitude: 139.6998,
//             latitude: 35.6495,
//             numberOfReviews: 54590,
//             rating: 5,
//             open: true,
//             address: '1990 Avenue of the Americas',
//             phone: '555-555-5555',
//             website: 'http://www.ivyplace.com',
//             images: ['https://media.architecturaldigest.com/photos/572a34ffe50e09d42bdfb5e0/4:3/w_2835,h_2126,c_limit/japanese-restaurants-la-01.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Sensoji Temple',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '8:00 AM',
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
//             longitude: 139.796783,
//             latitude: 35.714661,
//             numberOfReviews: 90887,
//             rating: 3.5,
//             open: true,
//             address: '119 Nueces St., Austin, TX 78741',
//             phone: '555-555-5555',
//             website: 'http://www.sensojitemple.com',
//             images: ['https://www.touropia.com/gfx/d/tourist-attractions-in-tokyo/sensoji_temple.jpg?v=29a16b16edae6dc242531c1dd1fb3188', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Tokyo Tower',
//             duration: 1,
//             description: 'This is a description of whatever item is located to the left.  This will be lorem ipsum until we can get the actual description from our APi.  I have to keep typing to make this really long so I can style my containers and make sure that the overflow is handled correctly.  That is so much funnnnnnnnnnnn!',
//             startTime: '10:00 AM',
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
//             longitude: 139.7454,
//             latitude: 35.6588,
//             numberOfReviews: 90654,
//             rating: 4.5,
//             open: true,
//             address: '7575 Toufuya Ukai',
//             phone: '555-555-5555',
//             website: 'http://www.tokyotower.com',
//             images: ['https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/134432_Tokyo_TokyoTower_230.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Tsukiji Fish Market',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '12:00 PM',
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
//             longitude: 139.7706,
//             latitude: 35.6657,
//             numberOfReviews: 87629,
//             rating: 5,
//             open: true,
//             address: '6533 Tsukiji Ave.',
//             phone: '555-555-5555',
//             website: 'http://www.tsukijimarket.com',
//             images: ['https://media.timeout.com/images/105230599/630/472/image.jpg', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Ichiran Ramen',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '1:00 PM',
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
//             longitude: 139.703,
//             latitude: 35.6914,
//             numberOfReviews: 12643,
//             rating: 4,
//             open: true,
//             address: '3-chome-29',
//             phone: '555-555-5555',
//             website: 'http://www.ichiranramen.com',
//             images: ['http://s3-us-west-2.amazonaws.com/static.trip-n-travel.com/wp-content/uploads/2016/04/05105256/142631273_87614b1cd5_o.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Mt. Fuji',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '2:00 PM',
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
//             longitude: 138.7275,
//             latitude: 35.3614,
//             numberOfReviews: 1000982,
//             rating: 5,
//             open: true,
//             address: 'Mt. Fuji',
//             phone: '555-555-5555',
//             website: 'http://www.mtfuji.com',
//             images: ['https://resources.matcha-jp.com/resize/720x2000/2019/03/14-73119.jpeg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Shibuya Crossing',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '4:00 PM',
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
//             longitude: 139.7005,
//             latitude: 35.6596,
//             numberOfReviews: 1098264,
//             rating: 5,
//             open: false,
//             address: 'Shibuya Crossing',
//             phone: '555-555-5555',
//             website: 'http://www.centralpark.com',
//             images: ['https://becomenomad.com/nomad/wp-content/uploads/tokyo-1.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Kyomachi Koi Shigure',
//             duration: 1,
//             description: 'lorem ipsum',
//             startTime: '5:00 PM',
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
//             longitude: 139.6983,
//             latitude: 35.6597,
//             numberOfReviews: 1599,
//             rating: 5,
//             open: true,
//             address: 'Japan, 〒150-0043 Tōkyō-to, Shibuya-ku, Dōgenzaka, 2-chōme−29, 29- 新大宗ビル５号館',
//             phone: '555-555-5555',
//             website: 'http://www.kyomachi.com',
//             images: ['https://favy-inbound-singapore.s3.amazonaws.com/uploads/topic_item/image/56349/retina_%E4%BA%AC%E7%94%BA%E6%81%8B%E3%81%97%E3%81%90%E3%82%8C_%E6%96%B0%E5%AE%BF.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Fukamachi',
//             duration: 2,
//             description: 'lorem ipsum',
//             startTime: '7:30 PM',
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
//             longitude: 139.7704,
//             latitude: 35.6767,
//             numberOfReviews: 32065,
//             rating: 5,
//             open: false,
//             address: '〒104-0031 東京都中央区京橋２丁目５−2',
//             phone: '555-555-5555',
//             website: 'http://www.fukumachi.com',
//             images: ['https://b70f084e29f3f8faffb0-389fffc5b90936635d166a32fdb11b6a.ssl.cf3.rackcdn.com/andy-hayler-fukamachi-front-w709-h532.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         },
//         {
//             name: 'Ageha',
//             duration: 7,
//             description: 'lorem ipsum',
//             startTime: '12:00 AM',
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
//             longitude: 139.8253,
//             latitude: 35.6424,
//             numberOfReviews: 84746,
//             rating: 5,
//             open: true,
//             address: '〒136-0082 東京都江東区新木場２丁目２−10',
//             phone: '555-555-5555',
//             website: 'http://www.agehanightclub.com',
//             images: ['https://media-cdn.tripadvisor.com/media/photo-s/03/a4/d5/e4/ageha-studio-coast.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
//         }]
// }
// );


module.exports = { findOne, deleteItinerary, deleteActivity, insertActivity };