import React, { Component } from 'react';
import './navigationBar.css';
// import { on } from 'cluster';


const NavigationBar = ({onCategoryChange}) => {
  return (
    <>
      <div className='navigationBar'>
        <button className='category' onClick={() => onCategoryChange('topSpots')}>TOP SPOTS</button>
        <button className='category' onClick={() => onCategoryChange('thingsToDo')}>THINGS TO DO</button>
        <button className='category' onClick={() => onCategoryChange('food&Drink')}>FOOD {'&'} DRINK</button>
        <button className='category' onClick={() => onCategoryChange('nigthLife')}>NIGHTLIFE</button>
        <button className='category' onClick={() => onCategoryChange('dayTrips')}>DAY TRIPS</button>        
      </div>
    </>
  );   
};

export default NavigationBar;