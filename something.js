import React, { Component } from "react";
import fetch from "node-fetch";
import Axios from "axios";
// import './App.css
//change
const apiKey = process.env.API_KEY;

import Script from "react-load-script";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    };

    this.HandleScriptLoad = this.HandleScriptLoad.bind(this);
    this.HandlePlaceSelect = this.HandlePlaceSelect.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.Initialize = this.Initialize.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  Initialize() {
    Axios.get("/location", {
      params: {
        city: this.state.results.city
      }
    })
      .then(data => {
        console.log("how data is sent from server", data.data);
        let nightLife = data.data.nightLife;
        let dayTrips = data.data.dayTrips;
        let restaurants = data.data.restaurants;
        let thingsToDo = data.data.thingsToDo;
        let topSpots = data.data.topSpots;

        this.state.results.nightLife = nightLife;
        this.state.results.dayTrips = dayTrips;
        this.state.results.restaurants = restaurants;
        this.state.results.thingsToDo = thingsToDo;
        this.state.results.topSpots = topSpots;
      })
      // .then(() => {
      //     this.getDetails(this.state.results.nightLife);
      // })
      // .then(() => this.getDetails(this.state.results.restaurants))
      // .then(() => this.getDetails(this.state.results.thingsToDo))
      // .then(() => this.getDetails(this.state.results.dayTrips))
      // .then(() => this.getDetails(this.state.results.topSpots))
      .then(() =>
        console.log("this is state", this.state.results.dayTrips[0].photos)
      )
      .catch(err => console.log(err));
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

    // Check if address is valid
    if (address) {
      // Set State
      this.state.results.city = address[0].long_name;
      this.Initialize();
    }
  }

  getDetails(array) {
    array.map(x => {
      Axios.get("/location/details", {
        params: {
          placeId: x.place_id
        }
      })
        .then(data => {
          const result = data.data.result;
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
        })
        .catch(err => console.log(err));
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

// .then(async (data) => {
//     let nightData = await getDetails(data)
//     nightLife = nightData
//   })

// let getDetails = (array) =>{
//   array.map(x => {
//     let placeId = x.place_id
//     fetch(
//       `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=name,formatted_phone_number,website,opening_hours,price_level,photos,types&key=${api}`
//     )
//       .then(data => {
//         const result = data.data.result;
//         let photoData = result.photos;
//         let openNowData = result.opening_hours.open_now;
//         let operatingData = result.opening_hours.weekday_text;
//         let priceData = result.price_level;
//         let typeData = result.types;
//         let website = result.website;
//         let phoneNumber = result.formatted_phone_number;

//         //console.log("does this exits?", photoData);
//         let photos = [];
//         photoData.map(x => {
//           photos.push(
//             `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${
//             x.photo_reference
//             }&key=${api}`
//           );
//         });
//         x.photos = photos;
//         x.hoursOfOperation = operatingData;
//         x.openOrNot = openNowData;
//         x.priceLevel = priceData;
//         x.type = typeData;
//         x.websiteUrl = website;
//         x.phoneNumber = phoneNumber;
//       })
//       .catch(err => console.log(err));
//   });
// }





fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=night+life+in+${location}&key=${api}`
)
    .then(res => res.json())
    .then(async data => {
        restaurants = await getDetails(data.results);
        nightLife = await getDetails(data.results);
    })

    
        fetch(
            `https://maps.googleapis.com/maps/api/place/textsearch/json?query=outdoor+activities+in+${location}&key=${api}`
        )
            .then(res => res.json())
            .then(async data => {
                thingsToDo = await getDetails(data.results);
            })

            
                fetch(
                    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=day+trips+in+${location}&key=${api}`
                )
                    .then(res => res.json())

                    .then(async data => {
                        dayTrips = await getDetails(data.results);
                    })
                    
                     let getRestaurants = Promise.resolve(  fetch(
                            `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${api}`
                        )
                            .then(res => res.json())
                            .then(async data => {
                                restaurants = await getDetails(data.results);
                            );













let getDayTrips = () => {
    fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${api}`
    )
        .then(res => res.json())
        .then(async data => {
            restaurants = await getDetails(data.results);
        });
};
let getNightLife = () => {
    fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${api}`
    )
        .then(res => res.json())
        .then(async data => {
            nightLife = await getDetails(data.results);
        });
};
let getThingsToDo = () => {
    fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${api}`
    )
        .then(res => res.json())
        .then(async data => {
            thingsToDo = await getDetails(data.results);
        });
};
let getRestaurants = () => {
    fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${api}`
    )
        .then(res => res.json())
        .then(async data => {
            restaurants = await getDetails(data.results);
        });
};