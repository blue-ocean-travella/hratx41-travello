import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import SearchBar from './searchBar.js';
import testPage from './testPage.jsx';
import CategoriesAndResults from './categoriesAndResults/categoriesAndResults.jsx';
import Axios from 'axios';
import fakeData from './thing.js';
import Connect from './connect.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPages: [SearchBar, CategoriesAndResults, testPage],
      currentPage: SearchBar,
      results:{}
    }; 
    this.nextPage = this.nextPage.bind(this);
    this.setResults = this.setResults.bind(this);
  }

  componentDidMount(){
    // Axios.get('/fakeData')
    // .then(result => {this.setState({nightLife:result.data});});
    // this.setState({results:fakeData});
  }
  nextPage(e){
    if(e.key ==='Enter'){
      this.setState({currentPage: CategoriesAndResults});
    } else if (e.key === undefined) {
     console.log('u clicked');
    }
    
  }

  setResults(results){
    console.log(results);
    this.setState({results},()=>{this.nextPage({key:'Enter'});});
  }
  render(){
    return (
      <>
      {/* <Connect/> */}
      <this.state.currentPage results={this.state.results} setResults={this.setResults} nextPage={this.nextPage}/>
     </>
     );
  }
}

