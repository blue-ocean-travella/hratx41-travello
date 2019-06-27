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
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }
        ],
        thingsToDo: [
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
          }, 
          {
            address: '2131 William Barton Dr, Austin, Tx  78456',
            hoursOfOperations: ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"],
            lat:30.265824,
            long: -97.74926,
            name: 'Barton Spring Municipal Pool',
            openOrNot: true,
            phoneNumber: '512 974 6300',
            photos: ['http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg'],
            place_id: "ChIJ0WXlR6a1RIYRvalkDL_NI5Y",
            priceLevel: undefined,
            rating: 4.5,
            totalReviews: 150,
            type: ['amusent park', 'point_of_interes', 'establishment'],
            uuid: 1,
            websiteUrl:  "http:wellarrangedtravel.com",
            longDescription: 'Barting Springs is a recreational  swimming pool tha is filled entirely with water from nearby  natural  spring. It is located on the grounds of Zilker Park in Austin, Texas. The pool exits within the channel of Barton Creek and utilizes water  from  Main Barton Spring, the fourth largest spring in Texas.',
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
        <CategoriesAndResults results={this.state.results} handdleAddToItenerary={this.handleAddToItenerary}  image={this.state.images[0]}/>
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
