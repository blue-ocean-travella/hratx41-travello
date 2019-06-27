import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import SearchBar from './searchBar.js';
import FakeOne from './fake.js';
import FakeTwo from './FakeTwo.js';
import FakeThree from './FakeThree.js';
import SidebarExampleTransitions from "./Sidebar.js";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      query:'',
      currentActivity:''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onInputChange(event){
    console.log(event.target.value, 'this is what the user typed');
    this.setState({ query: event.target.value });
  };

  onSubmit(event){ 
    if (event.key === 'Enter') {  
      this.initialize();
      console.log(this.state.query,'a city was submitted');
      this.setState({page: Routes['FAKEONE']().component});
    }
  };
 
  
  render(){
    
    return (
      <>
     <SearchBar onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>    
     </>

    );
  }
}

