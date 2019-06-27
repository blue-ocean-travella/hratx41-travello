import React, { Component } from 'react';
import './navigationBar.module.css';
// import { on } from 'cluster';


const NavigationBar = ({onCategoryChange}) => {
  return (
    <>
      <div className={styles.navigationBar}>
        <button className={styles.category} onClick={() => onCategoryChange('topSpots')}>TOP SPOTS</button>
        <button className={styles.category} onClick={() => onCategoryChange('thingsToDo')}>THINGS TO DO</button>
        <button className={styles.category} onClick={() => onCategoryChange('restaurants')}>FOOD {'&'} DRINK</button>
        <button className={styles.category} onClick={() => onCategoryChange('nightLife')}>NIGHTLIFE</button>
        <button className={styles.category} onClick={() => onCategoryChange('dayTrips')}>DAY TRIPS</button>        
      </div>
    </>
  );   
};

export default NavigationBar;