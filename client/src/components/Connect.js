import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import Axios from 'axios';

const StyledDiv = styled.div` 
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



 class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {  
     
    };
 
  }  

  render(){     
    
    return ( 
    <>
      <StyledDiv>
      <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>

      
      <img style={{ width:'100%', height:'350px'}}src="https://66.media.tumblr.com/4bd366bfa60ba6b4dd9c3b2f7887117f/tumblr_pl6w5dbxrt1qc5yjd_540.jpg"></img>




        <div style={{display:"flex",flexDirection:"row" ,position:"absolute", top:'0', left:'0', width:'100%', height:'160px', justifyContent:"space-between"}}>

          <img style={{paddingTop:"40px", paddingLeft:"40px", opacity:"0.8",height:"150px", width:'auto'}} 
          src="3ac62a16-a8a2-4ed6-a29a-6d8df9a6106f_200x200 (1).png"></img>

         <div style={{marginTop:'70px',display:'flex',justifyContent:'space-between'}}>
          <img style={{paddingTop:"40px", paddingLeft:"40px", opacity:"0.8",height:"90px", width:'auto'}} src="facebook.png"></img>
          <img style={{paddingTop:"40px", paddingLeft:"40px", opacity:"0.8",height:"90px", width:'auto'}} src="kisspng-baba-ghanoush-falafel-tabbouleh-party-battle-egg-white-instagram-logo-5b15d23f208202.3068722215281567351332.png"></img>
          <img style={{paddingTop:"40px", paddingLeft:"40px", opacity:"0.8",height:"90px", width:'auto'}} src="Twitter.png"></img>
          <img style={{paddingTop:"40px", paddingLeft:"40px", opacity:"0.8",height:"90px", width:'auto'}} src="youtube.png"></img>
          </div>
          
          <img style={{paddingTop:"60px", paddingRight:"40px",opacity:"0.8",height:"100px", width:'auto'}} src="white-down-arrow-png-2.png">
          </img>
         
         

        </div>
        <div style={{display:"flex",flexDirection:"row" ,position:"absolute", top:'0', left:'0', width:'100%', height:'100%', justifyContent:"center"}}>
      <div style={{display:'grid', gridColumnGap:'10px', gridRowGap:'10px', gridTemplateColumns:'auto auto auto auto', justifyItems:'center', marginTop: '400px', paddingLeft:'30px',paddingRight:'30px'}}>
      <img src='Screen Shot 2019-06-29 at 12.47.35 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.47.48 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.47.57 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.48.08 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.48.19 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.48.32 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.48.54 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.49.11 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 12.49.21 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 1.11.03 PM.png' style={{height:"500px", width:'500px'}}></img>
      <img src='Screen Shot 2019-06-29 at 1.11.20 PM.png' style={{height:"500px", width:'500px'}}></img>
      <a href='https://www.instagram.com/travellatravel.co/' style={{height:"500px", width:'500px',fontSize: '60px', fontFamily: 'lato',marginTop: '40%', paddingLeft: '20px',textAlign:'center'}}> ...more </a>

      </div>
        
        </div>
    
      </div>
    </StyledDiv>
   </>
    );
  };
}

export default Connect;


