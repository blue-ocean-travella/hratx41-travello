import React, { Component } from 'react';
import './header.css';
import axios from  'axios';
const apiKey = process.env.A_KEY;



class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  // componentDidMount() {
  //   let city =  this.props.city;
  //   city = city.split(',')[0].toLowerCase();

  //   axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=${apiKey}`)
  //    .then(images => {
  //     //  console.log(image.data.results[1]);
  //     //  images = images.data.results;
  //      let image = images.data.results[1].urls.full;
  //      let imagesData = images.data.results;
    
  //      imagesData.forEach(img => {
  //        if(img.width > 6000) {
  //          image = img.urls.full;
  //        }
  //      })
       
  //      this.setState({image});
  //     console.log(image);
  //    })
  //    .catch(err => {
  //      console.log('here is an error', err);
  //    })
  // }



  render ()  {

    // let random = Math.floor(Math.random() * images.length);
    // https://media.nbcwashington.com/images/1200*675/128215212.jpg'
    // console.log(city);
    // console.log(this.props.banner);
    return (
      <div className='header'>
      <img src={this.props.banner} className='background-image'></img>
      <div className='city'>{this.props.city}</div>
        <a  href='./index2.html' className='itinerary'>
          <img src='https://image.flaticon.com/icons/svg/60/60740.svg' className='itinerary'></img> 
        </a> 
    </div>

    );
  }
 
};

export default Header;