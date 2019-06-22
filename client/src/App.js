import React, { Component } from 'react';
import fetch from 'node-fetch';
import Itinerary from './Itinerary.jsx';

// import austin from '../assets/images/Austin-Skyline-Sunset-Aerial-Drone-Photo.jpg'
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: []
    };
    this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    fetch(this.api)
      .then(res => res.json())
      .then(seaCreatures => {
        this.setState({ seaCreatures: seaCreatures.data });
      });
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
