import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import Axios from 'axios';
import Script from 'react-load-script';
const apiKey = process.env.API_KEY;

// console.log(apiKey);
const StyledDiv = styled.div` 
input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
    opacity: 0.8
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #fff;
    opacity: 0.8
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #fff;
    opacity: 0.8
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #fff;
    opacity: 0.8
}
input, select, textarea{
    color: #fff;
    opacity: 0.8

}`; 



 class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      banner:'',
      nightLife: [],
      restaurants: [],
      thingsToDo: [],
      dayTrips: [],
      topSpots: []
    };
    this.url  =`ocean.mp3`;
    this.audio = new Audio(this.url);
    this.HandleScriptLoad = this.HandleScriptLoad.bind(this);
    this.HandlePlaceSelect = this.HandlePlaceSelect.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.Initialize = this.Initialize.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }  

  Initialize() {
    Axios.get("/location", {
      params: {
        city: this.state.city,
        latitude: this.state.latitude,
        longitude: this.state.longitude
      }
    })
      .then((data) =>{
      //  console.log("how data is sent from server", data.data);

      let results = {
        city: this.state.city, 
        banner: data.data.banner,
        nightLife: data.data.nightLife, 
        restaurants: data.data.restaurants,
        thingsToDo: data.data.thingsToDo,
        dayTrips: data.data.dayTrips,
        topSpots: data.data.topSpots};

      this.props.setResults(results);
       
      })
      .then(() =>{
        // console.log("hel",this.state.nightLife[0].photos);
      })
      .catch(err => console.log(err));
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log('i pressed enter');
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
    // document.getElementById(
    //   "cityLat"
    // ).value = addressObject.geometry.location.lat();
    // document.getElementById(
    //   "cityLng"
    // ).value = addressObject.geometry.location.lng();
    let lat = addressObject.geometry.location.lat();
    let long = addressObject.geometry.location.lng();

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name
        }
        
      );
    
  }}
  
  
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

  render(){     
    
    return ( 
    <>
      <StyledDiv>
      <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>
        <iframe style={{pointerEvents: "none", position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} src="https://media.flixel.com/cinemagraph/llnshyphvx0lmkz6ceqq?hd=true" frameBorder="0" allowFullScreen allow='autoplay'></iframe>
        <div style={{display:"flex",flexDirection:"row" ,position:"absolute", top:'0', left:'0', width:'100%', height:'160px', justifyContent:"space-between"}}>
          <img style={{paddingTop:"40px", paddingLeft:"40px", opacity:"0.8",height:"100px", width:'auto'}}src="16a60b31-4a4b-41eb-9cf2-b6f71c4a83e5_200x200.png"></img>
          <img style={{paddingTop:"40px", paddingRight:"40px",opacity:"0.8",height:"60px", width:'auto'}} src="white-down-arrow-png-2.png"></img>
        </div>
        <div style={{display:"flex",flexDirection:"row" ,position:"absolute", top:'0', left:'0', width:'100%', height:'100%', justifyContent:"center"}}>
        <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
            onLoad={this.HandleScriptLoad}
            onClick={this.Initialize}
          />
        <input id='autocomplete' onChange={this.props.onInputChange}  onKeyDown={this.handleKeyDown} style={{fontFamily: 'Lato',fontStyle: 'normal', fontWeight:'bold',fontSize: '28px',border:"none", borderBottom:"4px solid black",textAlign:'center', opacity:"0.8",backgroundColor:'transparent', height:"45px", marginTop:'380px', width:'450px',borderBottomColor:'white'}} type="text" placeholder="Where are you going?" name="search"></input>
        
        </div>
    
      </div>
    </StyledDiv>
   </>
    );
  };
}

export default SearchBar;


