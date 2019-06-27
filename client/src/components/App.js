import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import SearchBar from './searchBar/searchBar.jsx';
import testPage from './testPage.jsx';
import CategoriesAndResults from './categoriesAndResults/categoriesAndResults.jsx';
import Axios from 'axios';
import fakeData from './thing.js';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPages: [SearchBar, testPage, CategoriesAndResults],
      currentPage: SearchBar,
      results:{}
    }; 
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount(){
    // Axios.get('/fakeData')
    // .then(result => {this.setState({nightLife:result.data});});
    // this.setState({results:fakeData});
  }
  nextPage(e){
    if(e.key ==='Enter'){
      this.setState({currentPage: CategoriesAndResults});
    }
  }

  
  render(){
    return (
      <>
      {/* <div onKeyDown={this.nextPage}> */}
      <this.state.currentPage results={this.state.results}/>
      {/* </div> */}
     </>
     );
  }
}

