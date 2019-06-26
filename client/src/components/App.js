import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import SearchBar from './searchBar/searchBar.jsx';
import testPage from './testPage.jsx';
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPages: [SearchBar, testPage],
      currentPage: SearchBar,
      nightLife:[]
    }; 
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount(){
    Axios.get('/fakeData')
    .then(result => {this.setState({nightLife:result.data})});
  }
  nextPage(e){
    if(e.key ==='Enter'){
      this.setState({currentPage: testPage});
    }
  }

  
  render(){
    return (
      <>
      <a onKeyDown={this.nextPage}>
      <this.state.currentPage />
      </a>
     </>
    );
  }
}

