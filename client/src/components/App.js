import React, { Component } from 'react';
import fetch from 'node-fetch';
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaCreatures: []
    };
    // this.api = `http://localhost:8000/api/example`;
  }
  componentDidMount() {
    // fetch(this.api)
    //   .then(res => res.json())
    //   .then(seaCreatures => {
    //     this.setState({ seaCreatures: seaCreatures.data });
    //   });
  }

  render() {
    return (
      <>
        {/* <h1>Welcome to Blue Ocean!</h1>
        <ul>
          {this.state.seaCreatures.map((creature, index) => (
            <li key={index}>{creature}</li>
            
          ))}
        </ul> */}

      <div className="flx-embed">
      <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>
      <iframe style={{pointerEvents: "none", position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} src="https://media.flixel.com/cinemagraph/llnshyphvx0lmkz6ceqq?hd=true" frameBorder="0" allowFullScreen allow='autoplay'></iframe>
      </div>
      </div>
        
       
      </>
    );
  }
}
