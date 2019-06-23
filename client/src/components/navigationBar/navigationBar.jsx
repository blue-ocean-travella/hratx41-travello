import React, { Component } from 'react';
import './navigationBar.css';


const NavigationBar =  () => {
    return (
      <>
        <div className='navigationBar'>
          <button className='category'>TOP SPOTS</button>
          <button className='category'>THINGS TO DO</button>
          <button className='category'>FOOD {'&'} DRINK</button>
          <button className='category'>NIGTHLIFE</button>
          <button className='category'>DAY TRIPS</button>        
        </div>
      </>
    )
}

export default NavigationBar;