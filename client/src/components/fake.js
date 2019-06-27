import React, { Component } from 'react';

class FakeOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory:'topSpots'
    };
  }
  render(){
    return(
      <div> fake page 1 </div>
    );
  }
} 
export default FakeOne;