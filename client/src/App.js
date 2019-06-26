import React, { Component } from 'react';
import fetch from 'node-fetch';
import CategoriesAndResults from '../src/components/categoriesAndResults/categoriesAndResults.jsx'
import Axios from 'axios';


// import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);

    // this.handleAddToItenerary = this.handleAddToItenerary.bind(this);
      this.state = { 
      // page: this.props.HOME.component // start at home pag
      results: {
        city: "Austin, TX",
        topSpots: [
          {
          name: 'Barton Spring Municipal Pool',
          rating: 4.5,
          userRating: 150,
          distance: 2.3,
          open: true,
          time: '10am-3pm',
          description: '3 acre swimming pool in Zilker',
          bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          address: '2131 William Barton Dr, Austin, Tx  78456',
          phone: '512 974 6300',
          image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
          lat: 30.265824,
          lng: -97.74926,
          place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            userRating: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
            lat: 30.265824,
            lng: -97.74926,
            place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
            },
            {
              name: 'Barton Spring Municipal Pool',
              rating: 4.5,
              userRating: 150,
              distance: 2.3,
              open: true,
              time: '10am-3pm',
              description: '3 acre swimming pool in Zilker',
              bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
              address: '2131 William Barton Dr, Austin, Tx  78456',
              phone: '512 974 6300',
              image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
              lat: 30.265824,
              lng: -97.74926,
              place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
              },
              {
                name: 'Barton Spring Municipal Pool',
                rating: 4.5,
                userRating: 150,
                distance: 2.3,
                open: true,
                time: '10am-3pm',
                description: '3 acre swimming pool in Zilker',
                bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
                address: '2131 William Barton Dr, Austin, Tx  78456',
                phone: '512 974 6300',
                image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
                lat: 30.265824,
                lng: -97.74926,
                place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
                },
                {
                  name: 'Barton Spring Municipal Pool',
                  rating: 4.5,
                  userRating: 150,
                  distance: 2.3,
                  open: true,
                  time: '10am-3pm',
                  description: '3 acre swimming pool in Zilker',
                  bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
                  address: '2131 William Barton Dr, Austin, Tx  78456',
                  phone: '512 974 6300',
                  image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
                  lat: 30.265824,
                  lng: -97.74926,
                  place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
                  },   
        ],
        thingsToDo: [
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            userRating: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
            lat: 30.265824,
            lng: -97.74926,
            place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
            },
            {
              name: 'Barton Spring Municipal Pool',
              rating: 4.5,
              userRating: 150,
              distance: 2.3,
              open: true,
              time: '10am-3pm',
              description: '3 acre swimming pool in Zilker',
              bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
              address: '2131 William Barton Dr, Austin, Tx  78456',
              phone: '512 974 6300',
              image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
              lat: 30.265824,
              lng: -97.74926,
              place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
              },
              {
                name: 'Barton Spring Municipal Pool',
                rating: 4.5,
                userRating: 150,
                distance: 2.3,
                open: true,
                time: '10am-3pm',
                description: '3 acre swimming pool in Zilker',
                bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
                address: '2131 William Barton Dr, Austin, Tx  78456',
                phone: '512 974 6300',
                image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
                lat: 30.265824,
                lng: -97.74926,
                place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
                },
                {
                  name: 'Barton Spring Municipal Pool',
                  rating: 4.5,
                  userRating: 150,
                  distance: 2.3,
                  open: true,
                  time: '10am-3pm',
                  description: '3 acre swimming pool in Zilker',
                  bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
                  address: '2131 William Barton Dr, Austin, Tx  78456',
                  phone: '512 974 6300',
                  image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg',
                  lat: 30.265824,
                  lng: -97.74926,
                  place_id:"ChIJ0WXlR6a1RIYRvalkDL_NI5Y"
                  }
        ],
      },
      itenrary : [],
    };
    // this.api = `http://localhost:8000/api/example`;
  }
  // componen[tDidMount() {
  //   fetch(this.api)
  //     .then(res => res.json())
  //     .then(seaCreatures => {
  //       this.setState({ seaCreatures: seaCreatures.data });
  //     });
  // }

  // handleAddToItenerary(schedule) {
  //   this.setState({
  //     itenrary : this.state.itenrary.concat(schedule)
  //   })  
  // }

  render() {
    return (
      <>
        <CategoriesAndResults results={this.state.results} handdleAddToItenerary={this.handleAddToItenerary}/>
      </>
    );
  }
}

// {/* <h1>Welcome to Blue Ocean!</h1>
// <ul>
//   {this.state.seaCreatures.map((creature, index) => (
//     <li key={index}>{creature}</li>
//   ))}
// </ul> */}
