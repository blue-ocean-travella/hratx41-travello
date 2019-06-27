import React, { Component } from 'react';

class FakeTwo extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory:'topSpots'
    };
  }
  render(){
    return(
      <div> fake page 2 </div>
    );
  }
} 
export default FakeTwo;