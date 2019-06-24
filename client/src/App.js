import React, { Component } from 'react';
import fetch from 'node-fetch';
import CategoriesAndResults from '../src/components/categoriesAndResults/categoriesAndResults.jsx'
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        city: "Austin, TX",
        topSpots: [
          {
          name: 'Barton Spring Municipal Pool',
          rating: 4.5,
          totalReviews: 150,
          distance: 2.3,
          open: true,
          time: '10am-3pm',
          description: '3 acre swimming pool in Zilker',
          bigDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          address: '2131 William Barton Dr, Austin, Tx  78456',
          phone: '512 974 6300',
          image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
        ],
        thingsToDo: [
          {
          name: 'Barton Spring Municipal Pool',
          rating: 4.5,
          totalReviews: 150,
          distance: 2.3,
          open: true,
          time: '10am-3pm',
          description: '3 acre swimming pool in Zilker',
          bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
          address: '2131 William Barton Dr, Austin, Tx  78456',
          phone: '512 974 6300',
          image: 'https://pmcvariety.files.wordpress.com/2017/12/us-capitol-2.jpg?w=1000',
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://cdn.thecrazytourist.com/wp-content/uploads/2018/11/ccimage-shutterstock_696881512.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational  outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
          {
            name: 'Barton Spring Municipal Pool',
            rating: 4.5,
            totalReviews: 150,
            distance: 2.3,
            open: true,
            time: '10am-3pm',
            description: '3 acre swimming pool in Zilker',
            bigDescription: 'Barting Springs is a recreational outdoor swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas',
            address: '2131 William Barton Dr, Austin, Tx  78456',
            phone: '512 974 6300',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg'
          },
        ],
      }
    };
    // this.api = `http://localhost:8000/api/example`;
  }
  // componentDidMount() {
  //   fetch(this.api)
  //     .then(res => res.json())
  //     .then(seaCreatures => {
  //       this.setState({ seaCreatures: seaCreatures.data });
  //     });
  // }

  render() {
    return (
      <>
        <CategoriesAndResults results={this.state.results}/>
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
