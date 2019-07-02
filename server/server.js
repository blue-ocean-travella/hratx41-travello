// const createError = require('http-errors');
// const logger = require('morgan');
// const  {connect, User, NightLife, Restaurant, DayTrip, ThingsToDo} = require('./db/index.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('../client/public'));
require("dotenv").config({ path: "../.env" });
const fetch = require("node-fetch");
var faker = require("faker");
const db = require('./db/index.js');
const api = process.env.API_KEY;
var fs = require("fs")

app.use(express.static('../client/public'));
// const db = require('../database/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let hello;

app.get("/location", (req, res) => {
  console.log(req.query);
  let location = req.query.city;
  let topSpots, thingsToDo, restaurants, nightLife, dayTrips;
  let austin, newYork, barcelona, capeTown, miami, tokyo;
  console.log(location);
  if (location === "Austin") {
    fs.readFile("./json_data/Austin.json", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.parse(results).banner, 'THIS IS SERVER DATA')
        res.send(JSON.parse(results))
      }
    });
  }

  if (location === "New York") {
    fs.readFile("./json_data/NewYork.json", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(JSON.parse(results))
      }
    });
  }
  if (location === "Barcelona") {
    fs.readFile("./json_data/Barcelona.json", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(JSON.parse(results))
      }
    });
  }
  if (location === "Cape Town") {
    fs.readFile("./json_data/CapeTown.json", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(JSON.parse(results))
      }
    });
  }
  if (location === "Miami") {
    fs.readFile("./json_data/Miami.json", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(JSON.parse(results))
      }
    });
  }
  if (location === "Tokyo") {
    fs.readFile("./json_data/Tokyo.json", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(JSON.parse(results));
      }
    });
  }
  // let location = req.query.city;
  // let topSpots, thingsToDo, restaurants, nightLife, dayTrips;

//  let prom1 = fetch(
//     `https://maps.googleapis.com/maps/api/place/textsearch/json?query=night+life+in+${location}&key=${api}`
//   )
//     .then(res => res.json())
//     .then(async data => {
//       nightLife = await getDetails(data.results);
//     })

   
//     let prom2 =  fetch(
//         `https://maps.googleapis.com/maps/api/place/textsearch/json?query=outdoor+activities+in+${location}&key=${api}`
//       )
//         .then(res => res.json())
//         .then(async data => {
//           thingsToDo = await getDetails(data.results);
//         })

        
//        let prom3 = fetch(
//             `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${api}`
//           )
//             .then(res => res.json())

//             .then(async data => {
//               restaurants = await getDetails(data.results);
//             })
           
//            let prom4 = fetch(
//                 `https://maps.googleapis.com/maps/api/place/textsearch/json?query=day+trips+in+${location}&key=${api}`
//               )
//                 .then(res => res.json())
//                 .then(async data => {
//                   dayTrips = await getDetails(data.results);
//                 })
//                 Promise.all([prom1,prom2,prom3,prom4])
//                 .then(() => {
//                   let locationData = {};
//                   locationData["nightLife"] = parseData(nightLife);
//                   locationData["restaurants"] = parseData(restaurants);
//                   locationData["thingsToDo"] = parseData(thingsToDo);
//                   locationData["dayTrips"] = parseData(dayTrips);

//                   //res.send(locationData);
//                   return locationData;
//                 })
//                 .then(locationData => {
//                   let nightLife = locationData.nightLife;
//                   let dayTrips = locationData.dayTrips;
//                   let restaurants = locationData.restaurants;
//                   let thingsToDo = locationData.thingsToDo;
//                   // addPhotos(nightLife, dayTrips, restaurants, thingsToDo);
//                   let topSpots = topPlaces(
//                     nightLife,
//                     dayTrips,
//                     restaurants,
//                     thingsToDo
//                   );

//                   locationData.topSpots = topSpots;

//                   // let string = JSON.stringify(locationData);
//                   // fs.writeFile("thing.json", string, function(err, result) {
//                   //   if (err) console.log("error", err);
//                   // });
//                   // console.log("sending to app");
//                   res.send(locationData);
//                 })
              
    
//     .catch(err => console.log(err));
});

let parseData = array => {
  let results = [];
  let long,
    lat,
    name,
    photo,
    rating,
    totalReviews,
    address,
    place_id,
    openOrNot,
    websiteUrl,
    hoursOfOperation,
    phoneNumber,
    icon;
  //console.log("this is array inside parseData", array);
  for (let i = 0; i < array.length; i++) {
    let paragraph = faker.lorem.paragraph();
    let uuid = i;

    lat = array[i].geometry.location.lat;
    long = array[i].geometry.location.lat;
    name = array[i].name;
    address = array[i].formatted_address;
    place_id = array[i].place_id;
    rating = array[i].rating;
    totalReviews = array[i].user_ratings_total;
    photo = array[i].photos;
    openOrNot = array[i].openOrNot;
    websiteUrl = array[i].websiteUrl;
    phoneNumber = array[i].phoneNumber;
    priceLevel = array[i].priceLevel;
    formattedAddress = array[i].formatted_address;
    hoursOfOperation = array[i].hoursOfOperation;
    icon = array[i].icon;

    //photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${photoRef}&key=${api}`;
    results.push({
      uuid: uuid,
      name: name,
      address: address,
      long: long,
      lat: lat,
      photos: photo,
      rating: rating,
      totalReviews: totalReviews,
      place_id: place_id,
      description: paragraph,
      openOrNot: openOrNot,
      websiteUrl: websiteUrl,
      hoursOfOperation: hoursOfOperation,
      priceLevel: priceLevel,
      phoneNumber: phoneNumber,
      icon: icon
    });
  }

  return results;
};

let topPlaces = (arr1, arr2, arr3, arr4) => {
  arr1.sort((a, b) => a.rating - b.rating);
  let newArr1 = arr1.slice(-5);

  arr2.sort((a, b) => a.rating - b.rating);
  let newArr2 = arr2.slice(-5);
  arr3.sort((a, b) => a.rating - b.rating);
  let newArr3 = arr3.slice(-5);
  arr4.sort((a, b) => a.rating - b.rating);
  let newArr4 = arr4.slice(-6);

  let result = newArr1.concat(newArr2, newArr3, newArr4);

  return result;
};

let getDetails = async array => {
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${
        x.place_id
      }&fields=name,formatted_phone_number,website,opening_hours,price_level,photos,types&key=${api}`
    )
      .then(res => res.json())
      .then(data => {
        // console.log("im inside get DEtails", data.result.types);
        const result = data.result;

        let photoData = result.photos;
        let openNowData = result.opening_hours.open_now;
        let operatingData = result.opening_hours.weekday_text;
        let priceData = result.price_level;
        let typeData = result.types;
        let website = result.website;
        let phoneNumber = result.formatted_phone_number;

        //console.log("does this exits?", photoData);
        let photos = [];
        photoData.map(x => {
          photos.push(
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${
              x.photo_reference
            }&key=${api}`
          );
        });
        x.photos = photos;
        x.hoursOfOperation = operatingData;
        x.openOrNot = openNowData;
        x.priceLevel = priceData;
        x.type = typeData;
        x.websiteUrl = website;
        x.phoneNumber = phoneNumber;
        // console.log(x);
      })
      .catch(err => console.log(err));
    //console.log(array[0]);
  }
  //console.log(array[0]);
  return array;
};


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
              console.log('server succesfully read record:', id)
              res.send(data[0]);
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

var port = process.env.PORT || 8000;
app.listen(port, ()=>{console.log(`listening at ${port}`)})


module.exports = app;
