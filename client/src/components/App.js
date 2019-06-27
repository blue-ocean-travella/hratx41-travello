import React, { Component } from 'react';
import fetch from 'node-fetch';
import Itinerary from './Itinerary.jsx';
// import TimeModal from './TimeModal.jsx';

// import austin from '../assets/images/Austin-Skyline-Sunset-Aerial-Drone-Photo.jpg'
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <>
        <div>
          <Itinerary />
        </div>
      </>
    );
  }
}
