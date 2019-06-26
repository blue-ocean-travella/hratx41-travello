import React, { Component } from "react";
import fetch from "node-fetch";
import Axios from "axios";
// import './App.css

const apiKey = process.env.API_KEY;

import Script from "react-load-script";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      nightLife: [],
      restaurants: [],
      thingsToDo: [],
      dayTrips: [],
      topSpots: []
    };

    this.HandleScriptLoad = this.HandleScriptLoad.bind(this);
    this.HandlePlaceSelect = this.HandlePlaceSelect.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.Initialize = this.Initialize.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  TopSpots(arr1, arr2, arr3, arr4) {
    arr1.sort((a, b) => a.rating - b.rating);
    let newArr1 = arr1.slice(-4);

    arr2.sort((a, b) => a.rating - b.rating);
    let newArr2 = arr2.slice(-4);
    arr3.sort((a, b) => a.rating - b.rating);
    let newArr3 = arr3.slice(-4);
    arr4.sort((a, b) => a.rating - b.rating);
    let newArr4 = arr4.slice(-4);

    let result = newArr1.concat(newArr2, newArr3, newArr4);

    return result;
  }

  Initialize() {
    Axios.get("/location", {
      params: {
        city: this.state.city,
        latitude: this.state.latitude,
        longitude: this.state.longitude
      }
    })
      .then(data => {
        console.log("how data is sent from server", data.data);
        let nightLife = data.data.nightLife;
        let dayTrips = data.data.dayTrips;
        let restaurants = data.data.restaurants;
        let thingsToDo = data.data.thingsToDo;
        let topSpots = data.data.topSpots;
        this.state.nightLife = nightLife;
        this.state.dayTrips = dayTrips;
        this.state.restaurants = restaurants;
        this.state.thingsToDo = thingsToDo;
        this.state.topSpots = topSpots;
      })
      .then(() => {
        this.getDetails(this.state.nightLife);
      })
      .then(() => this.getDetails(this.state.restaurants))
      .then(() => this.getDetails(this.state.thingsToDo))
      .then(() => this.getDetails(this.state.dayTrips))
      .then(() => this.getDetails(this.state.topSpots))
      .then(() => console.log("this is state", this.state));
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.Initialize();
    }
  }

  HandleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ["(regions)"]
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.HandlePlaceSelect);
  }

  HandlePlaceSelect() {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    document.getElementById(
      "cityLat"
    ).value = addressObject.geometry.location.lat();
    document.getElementById(
      "cityLng"
    ).value = addressObject.geometry.location.lng();
    let lat = addressObject.geometry.location.lat();
    let long = addressObject.geometry.location.lng();

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name
        },
        this.Initialize
      );
    }
  }

  getDetails(array) {
    array.map(x => {
      Axios.get("/location/details", {
        params: {
          placeId: x.place_id
        }
      }).then(data => {
        let photoData = data.data.result.photos;
        let operatingData = data.data.result.opening_hours.weekday_text;
        let openNowData = data.data.result.opening_hours.open_now;
        let priceData = data.data.result.price_level;
        let typeData = data.data.result.types;
        let website = data.data.result.website;
        let phoneNumber = data.data.result.formatted_phone_number;

        //console.log("does this exits?", photoData);
        let photos = [];
        photoData.map(x => {
          photos.push(
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${
              x.photo_reference
            }&key=${apiKey}`
          );
        });
        x.photos = photos;
        x.hoursOfOperation = operatingData;
        x.openOrNot = openNowData;
        x.priceLevel = priceData;
        x.type = typeData;
        x.websiteUrl = website;
        x.phoneNumber = phoneNumber;
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Blue Ocean!</h1>
        <div>
          <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
            onLoad={this.HandleScriptLoad}
            onClick={this.Initialize}
          />
          <input
            id="autocomplete"
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
            onKeyDown={this.handleKeyDown}
          />
          <input type="hidden" id="cityLat" name="cityLat" />
          <input type="hidden" id="cityLng" name="cityLng" />
        </div>
        <div>
          <input
            type="text"
            id="throwAway"
            onKeyDown={this.handlePlaceDetail}
          />
        </div>
      </div>
    );
  }
}
