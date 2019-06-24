import React, { Component } from "react";
import fetch from "node-fetch";

// import './App.css';
import Script from "react-load-script";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      query: "",
      latitutde: "",
      longitude: ""
    };
    this.api = `http://localhost:8000/api/example`;
    this.HandleScriptLoad = this.HandleScriptLoad.bind(this);
    this.HandlePlaceSelect = this.HandlePlaceSelect.bind(this);
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
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
        latitutde: lat,
        longitude: long
      });
    }
    console.log(this.state.query);
    console.log(this.state.city);
    console.log(this.state.latitutde);
    console.log(this.state.longitude);
  }

  render() {
    return (
      <div>
        <h1>Welcome to Blue Ocean!</h1>
        <div>
          <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKeNf2hkXA_KuH8kvFdjV6dAvI3Xh9l9k&libraries=places"
            onLoad={this.HandleScriptLoad}
          />
          <input
            id="autocomplete"
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
            onClick={this.Initialize}
          />
          <input type="hidden" id="cityLat" name="cityLat" />
          <input type="hidden" id="cityLng" name="cityLng" />
        </div>
      </div>
    );
  }
}
