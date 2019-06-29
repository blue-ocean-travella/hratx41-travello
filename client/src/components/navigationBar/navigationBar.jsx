import React, { Component } from 'react';
import styles from'./navigationBar.css';
// import { on } from 'cluster';

const  handleClick = () => {
  console.log('is cliciked');
};

//

const NavigationBar = ({onCategoryChange, currentCategory}) => {

 

  return (
    <>
      <div className='navigationBar'>
        <button className={`category ${currentCategory === 'topSpots' ? 'changeCurrentCategory' : ''}`} onClick={() => onCategoryChange('topSpots')}>TOP SPOTS</button>
        <button className={`category ${currentCategory === 'thingsToDo' ? 'changeCurrentCategory' : ''}`} onClick={() => onCategoryChange('thingsToDo')}>THINGS TO DO</button>
        <button className={`category ${currentCategory === 'restaurants' ? 'changeCurrentCategory' : ''}`} onClick={() => onCategoryChange('restaurants')}>FOOD {'&'} DRINK</button>
        <button className={`category ${currentCategory === 'nightLife' ? 'changeCurrentCategory' : ''}`} onClick={() => onCategoryChange('nightLife')}>NIGHTLIFE</button>
        <button className={`category ${currentCategory === 'dayTrips' ? 'changeCurrentCategory' : ''}`} onClick={() => onCategoryChange('dayTrips')}>DAY TRIPS</button>     
      </div>
    </>
  );   
};

export default NavigationBar;