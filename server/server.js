// const createError = require('http-errors');
// const logger = require('morgan');
const  {connect, User, NightLife, Restaurant, DayTrip, ThingsToDo} = require('./db/index.js')
const express = require('express');
const app = express();
app.use(express.static('../client/public'));
require("dotenv").config({ path: "../.env" });
const fetch = require("node-fetch");

const api = process.env.API_KEY;
var fs = require("fs")

console.log(api, 'this is api from env file')

app.get("/apiKey", (req, res) => {
  // console.log("request received");
  res.send(api);
});

app.get("/fakeData", (req,res)=>{
  // console.log(NightLife);
  
  NightLife.find({}, (err,data)=>{res.send(data)});
})

app.get("/city", (req, res) => {
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

          res.send(locationData);
        });
    });
});




let parseData = array => {
  let results = [];
  let long, lat, name, photo, rating, userRating, address, place_id;

  for (let i = 0; i < array.length; i++) {
    lat = array[i].geometry.location.lat;
    long = array[i].geometry.location.lat;
    name = array[i].name;
    address = array[i].formatted_address;
    place_id = array[i].place_id;

    photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=
      ${array[i].photos[0].photo_reference}&key=${api}`;

    rating = array[i].rating;
    userRating = array[i].user_ratings_total;
    results.push({
      name: name,
      address: address,
      long: long,
      lat: lat,
      photo: photo,
      rating: rating,
      userRating: userRating,
      place_id: place_id
    });
  }

  return results;
};

var port = process.env.PORT || 8000;
app.listen(port, ()=>{console.log(`listening at ${port}`)})


module.exports = app;