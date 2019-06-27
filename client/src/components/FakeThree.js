import React, { Component } from 'react';

class FakeThree extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentCategory:'topSpots'
    };
  }
  render(){
    return(
      <div> fake page 3 </div>
    );
  }
} 
export default FakeThree;