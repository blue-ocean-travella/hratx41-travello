import React, { Component } from 'react';
import TopSpots from '../topSpots.jsx';
import ThingsToDo from '../thingsToDo.jsx';
import NigthLife from '../nightLife.jsx';
import FoodAndDrink from '../foodAndDrink.jsx';
import DayTrips from '../dayTrips.jsx';
// import './navigationBar.css';

class NavigationBar extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <>
        <div className='navigationBar'>
          <TopSpots/>
          <ThingsToDo/>
          <FoodAndDrink/>
          <NigthLife/>
          <DayTrips/>
          
        </div>
      </>
    )
  }


}

export default NavigationBar;