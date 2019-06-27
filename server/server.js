// const createError = require('http-errors');
// const logger = require('morgan');
const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const fetch = require("node-fetch");
const api = process.env.API_KEY;
var fs = require("fs");
var faker = require("faker");
var db = require("./db/index")

app.use(express.static("../client/public"));

app.post("/delete:{itinerary}", (req, res) => {
  let user = req.query.user
  let card = req.query.card
  let query = {name:user, itinerary: { $elemMatch: { card: card } } }
  console.log("delete started ");

  db.deleteData(query, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.send(`${uuid} was deleted`);
    }
  });
});

app.post("/update:{itinerary}", (req, res) => {
  console.log("update started ", req.query);
  let predated = req.query.change;
  let updated = req.query.update;
  db.updateData(predated, updated, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.send(`something was updated ${response}`);
    }
  });
  //res.send(req.query);
});

app.post("/insert:{itenerary}", function(req, res) {
  console.log("update started ", req.query);
  let user = req.query.user
  let card = req.query.card
  let query = {name:user},{ $push: {itinerary:card}}
 
//may need to use uuid and not user?
  db.insertData(query, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.send(`something was updated ${response}`);
    }
  });
});

app.get("/select:{itinerary}", function(req, res) {
  console.log("this is req query", req.query);
  let user = req.query.user
  let card = req.query.card
  let query = {itinerary: {$elemMatch: {card: card}}}

  db.findData(req.query, (err, response) => {
    if (err) {
      console.log(err, "err");
    } else {
      res.send(response);
    }
  });
});

app.get("/location/details", (req, res) => {
  let placeId = req.query.placeId;
  fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,formatted_phone_number,website,opening_hours,price_level,photos,types&key=${api}`
  )
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

app.get("/location", (req, res) => {
  //console.log(req.query);
  let location = req.query.city;
  let topSpots, thingsToDo, restaurants, nightLife, dayTrips;

  fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=night+life+in+${location}&key=${api}`
  )
    .then(res => res.json())
    .then(data => (nightLife = data.results))

    .then(() => {
      fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=outdoor+activities+in+${location}&key=${api}`
      )
        .then(res => res.json())
        .then(data => (thingsToDo = data.results))
        .then(() => {
          fetch(
            `https://maps.googleapis.com/maps/api/place/textsearch/json?query=day+trips+in+${location}&key=${api}`
          )
            .then(res => res.json())
            .then(data => (dayTrips = data.results))
            .then(() => {
              fetch(
                `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${api}`
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
                  // console.log("sending to app");
                  res.send(locationData);
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

let parseData = array => {
  let results = [];
  let long, lat, name, photo, rating, totalReviews, address, place_id;

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
      place_id: place_id,
      description: paragraph
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
