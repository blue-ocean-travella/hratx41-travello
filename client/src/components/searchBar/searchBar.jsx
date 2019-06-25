import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 

const StyledDiv = styled.div` 
textarea:focus, input:focus{
    outline: none;
}
input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
    opacity: 0.8
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #fff;
    opacity: 0.8
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #fff;
    opacity: 0.8
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #fff;
    opacity: 0.8
}
input, select, textarea{
    color: #fff;
    opacity: 0.8

}`; 


 class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.url  =`ocean.mp3`;
    this.audio = new Audio(this.url);
  }  

  render(){     
    return ( 
    <>
      <StyledDiv>
      <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>
        <iframe style={{pointerEvents: "none", position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} src="https://media.flixel.com/cinemagraph/llnshyphvx0lmkz6ceqq?hd=true" frameBorder="0" allowFullScreen allow='autoplay'></iframe>
      
        <div style={{display:"flex",flexDirection:"row" ,position:"absolute", top:'0', left:'0', width:'100%', height:'160px', justifyContent:"space-between"}}>
          <img style={{paddingTop:"40px", paddingLeft:"40px", opacity:"0.8",height:"100px", width:'auto'}}src="16a60b31-4a4b-41eb-9cf2-b6f71c4a83e5_200x200.png"></img>
     
          <img style={{paddingTop:"40px", paddingRight:"40px",opacity:"0.8",height:"60px", width:'auto'}} src="white-down-arrow-png-2.png"></img>
        </div>
        <div style={{display:"flex",flexDirection:"row" ,position:"absolute", top:'0', left:'0', width:'100%', height:'100%', justifyContent:"center"}}>
        <input id='autoComplete' onChange={this.props.onInputChange} onKeyPress={this.props.onSubmit} style={{fontFamily: "Helvetica Neue",fontStyle: 'normal',fontSize: '40px',border:"none", borderBottom:"4px solid black",textAlign:'center', opacity:"0.8",backgroundColor:'transparent', height:"45px", marginTop:'380px', width:'450px',borderBottomColor:'white'}} type="text" placeholder="Where are you going?" name="search"></input>
        </div>
    
      </div>
    </StyledDiv>
   </>
    );
  }
}

export default SearchBar;


