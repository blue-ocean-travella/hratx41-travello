import React, { Component } from 'react';
import './header.css';
import axios from  'axios';

// import itinerary from './itinerary.png';
const apiKey = process.env.A_KEY;


const images = [
  'https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2017-05/23b0b0b9caaa07ee409b693da9bf9003.jpeg?itok=pE5ss3vx',
  'https://media.webjet.com.au/Images/cities/1200x472/TYO1.jpg',
  'https://cdn.cnn.com/cnnnext/dam/assets/160330153344-09-japan-temples.jpg',
  'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/attractions/petronas-twin-tower/pagePropertiesImage/petronas-twin-towers.jpg',
  'http://images6.fanpop.com/image/photos/40600000/brooklyn-bridge-at-night-2-wallpaper-1600x900-beautiful-things-40673686-1600-900.jpg',
  'https://guardian.ng/wp-content/uploads/2018/02/zakynthos-ionian-islands-greece-GREEKISLES1216-e1518079555875-1062x598.jpg',
  'https://www.tripsavvy.com/thmb/eqIUoqQykjoDq0sCKQVY7XccPkk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/37705096385_a5722ec534_k-5b50265246e0fb003780ab4c.jpg',
  'https://www.thevintagenews.com/wp-content/uploads/2019/04/hagia-sophia-picture-id670401080.jpg',
  'https://thumbs-prod.si-cdn.com/bgEOL54kwN1Z_WnpkM53u-e84WE=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/93/82/93822a87-82eb-4a9f-97a6-3ad5ec8d7e56/gettyimages-961271800.jpg',
  'https://www.rd.com/wp-content/uploads/2017/11/This-Stunning-Town-in-the-Swiss-Alps-Will-Pay-You-25000-to-Move-There_252539665_ansharphoto-1024x683.jpg',
  'https://photos.smugmug.com/Landscapes/TexasCities-1/Austin-Texas/i-4CBpj3p/0/fc1d0e57/L/austin-skyline-from-boardwalk-feb-2015-final%20%281%20of%201%29-L.jpg',
  'https://dw8stlw9qt0iz.cloudfront.net/4eZetbLz3y692SMnzrlnVPFWUTU=/750x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/thumbnail/standard/9d70d226-6dce-4f77-f6a6-d457a54230b1.png',
  'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200',
  'https://s3.amazonaws.com/trip-brief-production/tip_photos/photos/000/000/762/display/victoria-falls-Victoria-Falls-international-arrivals-continue-to-soar-800x400-d22460f33d.jpg?1542748371',
  'https://img.theculturetrip.com/x/smart/wp-content/uploads/2017/03/table-mountain-1995966_1280.jpg',
  'https://atmosair.com/wp-content/uploads/2018/07/top-destination-bangkok.jpg',
  'https://cdn.civitatis.com/reino-unido/londres/galeria/london-eye-atardecer.jpg',
  'http://www.talkativeman.com/img/Enormous_Christ_the_Redeemer_Statue_in_Rio_de_Janeiro.jpg',
  'https://www.jetsetter.com/uploads/sites/7/2019/03/bobmd-bungalow-2973-hor-clsc-1160x690.jpg'
];



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
    return (
       <div className='header'>
         <img src='https://www.munsch.com/portalresource/lookup/wosid/cp-base-3-11603/image.name=/Austin%20-%20Offices%20Page_Main_Crop.jpg' className='background-image'></img>
         <div className='city'>{this.props.city}</div>
         <div>
           <button className='itinerary'>
             <a href='./index2.html' className='linkTag'>Your Itinerary</a> 
           </button>
         </div>
       </div>
    );
  }
 
};

export default Header;