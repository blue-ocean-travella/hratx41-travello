// const createError = require('http-errors');
// const logger = require('morgan');
const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const fetch = require("node-fetch");
const api = process.env.API_KEY;
var fs = require("fs");

// open up CORS
// app.use((_, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Reqed-With, Content-Type, Accept");
//     next();
// });
console.log("this is api test 1", api);
console.log("this is api test 2", { api });

//hello;
app.use(express.static("../client/public"));

app.get("/location/details", (req, res) => {
  let placeId = req.query.placeId;
  console.log(placeId);
  fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,formatted_phone_number,website,opening_hours,price_level,photos,types&key=${api}`
  )
    .then(res => res.json())
    .then(data => res.send(data));
});

app.get("/jsonstuff", (req, res) => {
  console.log("REREEEQQQQQQQ>QQUQUUUEEEERRRRRYYYYY", req.query.state);
  let string = JSON.stringify(req.query.state);
  fs.writeFile("thin.json", string, function(err, result) {
    if (err) console.log("error", err);
  });
});
// app.use(logger('dev'));

// const nightLife = function(req, res, next) {
//   let response;
//   fetch(
//     "https://maps.googleapis.com/maps/api/place/textsearch/json?query=night+life+in+austin+tx&key=AIzaSyCKeNf2hkXA_KuH8kvFdjV6dAvI3Xh9l9k"
//   )
//     .then(res => res.json())
//     .then(data => (req["nightlife"] = data));

//   next();
// };

// const cb1 = function(req, res, next) {
//   req["CB1"] = "Result of CB1";
//   console.log(req.query.latitude);
//   next();
// };

// const cb2 = function(req, res) {
//   console.log("CB2: Result of CB0: " + req["CB0"]);
//   console.log("CB2: Result of CB1: " + req["CB1"]);
//   res.send(req["nightlife"]);
// };

app.get("/apiKey", (req, res) => {
  console.log("request recieved");
  res.send(api);
});

app.get("/location", (req, res) => {
  console.log(req.query);
  let location = req.query.city;
  let latitude = req.query.latitude;
  let longitude = req.query.longitude;
  let topSpots, thingsToDo, restaurants, nightLife, dayTrips;
  fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=night+life+in+${location}+tx&key=${api}`
  )
    .then(res => res.json())
    .then(data => {
      nightLife = data.results;
    });
  fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=outdoor+activities+in+${location}+tx&key=${api}`
  )
    .then(res => res.json())
    .then(data => {
      thingsToDo = data.results;
    });
  fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=day+trips+in+${location}+tx&key=${api}`
  )
    .then(res => res.json())
    .then(data => {
      dayTrips = data.results;
    })
    .then(() => {
      fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}+tx&key=${api}`
      )
        .then(res => res.json())
        .then(data => (restaurants = data.results))
        .then(() => {
          let locationData = {};
          locationData["nightLife"] = parseData(nightLife);
          locationData["restaurants"] = parseData(restaurants);
          locationData["thingsToDo"] = parseData(thingsToDo);
          locationData["dayTrips"] = parseData(dayTrips);

          //res.send(locationData);
          return locationData;
        })
        .then(locationData => {
          let nightLife = locationData.nightLife;
          let dayTrips = locationData.dayTrips;
          let restaurants = locationData.restaurants;
          let thingsToDo = locationData.thingsToDo;
          // addPhotos(nightLife, dayTrips, restaurants, thingsToDo);
          let topSpots = topPlaces(
            nightLife,
            dayTrips,
            restaurants,
            thingsToDo
          );

          locationData.topSpots = topSpots;

          // let string = JSON.stringify(locationData);
          // fs.writeFile("thing.json", string, function(err, result) {
          //   if (err) console.log("error", err);
          // });
          res.send(locationData);
        });
    });
});
// app.get("/city", [cb0, cb1, cb2]) => {
//   console.log("im inside express");
//   let location = req.query.city;
//   let latitude = req.query.latitude;
//   let longitude = req.query.longitude;
//   let topSpots, thingsToDo, restaurants, nightLife, dayTrips;
//     app.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=night+life+in+austin+tx&key=AIzaSyDvU1Z6IiPGgXDnm04zvmi5XB0Q7DH9LQU")

//   console.log(location, latitude, longitude);
//   //res.send(req.query);
// });

let parseData = array => {
  let results = [];
  let long, lat, name, photo, rating, totalReviews, address, place_id;

  for (let i = 0; i < array.length; i++) {
    let uuid = i;

    lat = array[i].geometry.location.lat;
    long = array[i].geometry.location.lat;
    name = array[i].name;
    address = array[i].formatted_address;
    place_id = array[i].place_id;
    rating = array[i].rating;
    totalReviews = array[i].user_ratings_total;
    //photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${photoRef}&key=${api}`;
    results.push({
      uuid: uuid,
      name: name,
      address: address,
      long: long,
      lat: lat,
      photo: photo,
      rating: rating,
      totalReviews: totalReviews,
      place_id: place_id
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

// let addPhotos = (arr1, arr2, arr3, arr4) => {
//   let mapArray = arr => {
//     arr.map(x => {
//       x.photos = [];
//       x.photos.push(
//         `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${
//           x.photo.photo_reference
//         }&key=${api}`
//       );
//     });
//   };

//   mapArray(arr1);
//   mapArray(arr2);
//   mapArray(arr3);
//   mapArray(arr4);
// };

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

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});

module.exports = app;
