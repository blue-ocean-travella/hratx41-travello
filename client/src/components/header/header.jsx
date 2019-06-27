import React, { Component } from 'react';
import './header.module.css';

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
       <div className={styles.header}>
         <img src='https://www.elite-dentistry.net/wp-content/uploads/2018/08/xheader-banner-home.jpg.pagespeed.ic.q4-4b2pub4.webp' className={styles.background-image}></img>
         <div className={styles.city}>{this.props.city}</div>
         <button className={styles.iteneraryButton} onClick={this.handleClicke}>Your Itinerary </button>
       </div>
    );
    }
};

export default Header;