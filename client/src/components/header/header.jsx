import React, { Component } from 'react';
import './header.css';

const Header = ({city}) => {
    return (
       <div className='header'>
         <img src='https://www.americaninno.com/wp-content/uploads/2017/08/32197839955_7884912348_k.jpg' className='background-image'></img>
         <div className='city'>{city}</div>
         <button className='iteneraryButton'>Go to Itenerary </button>
       </div>
    );
};

export default Header;