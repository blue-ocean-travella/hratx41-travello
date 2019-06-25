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
      query: "",
      latitude: "",
      longitude: ""
    };

    this.HandleScriptLoad = this.HandleScriptLoad.bind(this);
    this.HandlePlaceSelect = this.HandlePlaceSelect.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.Initialize = this.Initialize.bind(this);
  }

  Initialize() {
    Axios.get("/city", {
      params: {
        city: this.state.city,
        latitude: this.state.latitude,
        longitude: this.state.longitude
      }
    }).then(data => console.log(data));
  }

  // handleKeyDown(e) {
  //   if (e.key === "Enter") {
  //     this.Initialize();
  //   }
  // }

  HandleScriptLoad() {
    // Declare Options For Autocomplete
    var options = {
      types: ["(regions)"]
    }; // To disable any eslint 'google not defined' errors

    Axios.get("/apiKey")
      .then(data => this.setState({ apiKey: data.data }))
      .then(() => console.log(this.state.apiKey));

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
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
        latitude: lat,
        longitude: long
      });
    }
    console.log(this.state.query);
    console.log(this.state.city);
    console.log(this.state.latitude);
    console.log(this.state.longitude);
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
      </div>
    );
  }
}
