import React, { Component } from 'react';
import fetch from 'node-fetch';
import Itinerary from './Itinerary.jsx';


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
