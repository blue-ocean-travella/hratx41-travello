// const createError = require('http-errors');
// const logger = require('morgan');
const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const fetch = require("node-fetch");
const api = process.env.API_KEY;
var fs = require("fs");

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

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});

module.exports = app;
