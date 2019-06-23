import React, { Component } from 'react';
import './header.css'

const Header = ({city}) => {
    return (
       <div className='header'>
         {city}
       </div>
    )
}

export default Header;