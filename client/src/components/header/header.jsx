import React, { Component } from 'react';
import './header.css';

// class Header extends Component ({city}) => {
class Header extends Component {
  constructor(props) {
    super(props);
  
  }
  
  handleClicke () {
    console.log('is cliciked');
  }
  render() {
    return (
       <div className='header'>
         <img src='https://www.elite-dentistry.net/wp-content/uploads/2018/08/xheader-banner-home.jpg.pagespeed.ic.q4-4b2pub4.webp' className='background-image'></img>
         <div className='city'>{this.props.city}</div>
         <button className='iteneraryButton' onClick={this.handleClicke}>Your Itinerary </button>
       </div>
    );
    }
};

export default Header;