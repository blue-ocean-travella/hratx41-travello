import React, { Component } from 'react';
import styles from'./navigationBar.css';
// import { on } from 'cluster';

const  handleClick = () => {
  console.log('is cliciked');
}

const NavigationBar = ({onCategoryChange}) => {

 

  return (
    <>
      <div className='navigationBar'>
        <button className='category' onClick={() => onCategoryChange('topSpots')}>TOP SPOTS</button>
        <button className='category' onClick={() => onCategoryChange('thingsToDo')}>THINGS TO DO</button>
        <button className='category' onClick={() => onCategoryChange('restaurants')}>FOOD {'&'} DRINK</button>
        <button className='category' onClick={() => onCategoryChange('nightLife')}>NIGHTLIFE</button>
        <button className='category' onClick={() => onCategoryChange('dayTrips')}>DAY TRIPS</button> 
        <button className='category' onClick={handleClick}>
           <a  href='./index2.html' className='itinerary'>YOUR ITINERARY</a>
        </button>       
      </div>
    </>
  );   
};

export default NavigationBar;