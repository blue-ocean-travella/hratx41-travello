import React, { Component } from 'react';
import fetch from 'node-fetch';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: []
    };

  }
  componentDidMount() {

  }

  render() {
    return (
      <>
      <div className="flx-embed">
      <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>
      <iframe style={{pointerEvents: "none", position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} src="https://media.flixel.com/cinemagraph/llnshyphvx0lmkz6ceqq?hd=true" frameBorder="0" allowFullScreen allow='autoplay'></iframe>
      </div>
      </div>
      </>
    );
  }
}
