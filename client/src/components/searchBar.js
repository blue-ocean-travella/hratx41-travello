import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles({
    

  list: {
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: 'pink',
            },
        },
    },
    width: 386,
    background: 'transparent !important',
    boxShadow: 'none',
    // backgroundColor: ' black',
    height: '100%', 
    // rgba(0, 0, 0, 0.5)
    // opacity:'0.8'
    backgroundColor: 'rgba(0, 0, 0, 0.5)'


  },
  fullList: {
    background: 'transparent',
    boxShadow: 'none',
    width: 'auto',
    height: '100%', 
    // opacity:'0.8'
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
 
});


export default function SearchBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false, 
    arrowDown: null
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  const handleArrow = () =>{
      setState({arrowDown:false});
  }

  const sideList = side => (
    <div 
      
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List >
      <img style={{paddingTop:"50px", paddingLeft:"55px",height:"170px", width:'auto'}} src="3ac62a16-a8a2-4ed6-a29a-6d8df9a6106f_200x200 (1).png"></img>   
         </List>
      <Divider style={{backgroundColor:"white"}} />
      <List style={{height:'100%'}}>
        {['About', 'Itinerary', 'Our Picks','Connect','Press'].map((text, index) => (
          <ListItem button key={text} style={{color:"white"}}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

//   const fullList = side => (
//     <div
//       className={classes.fullList}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

  return (
    <div>
    
   <div >
  <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>
   <iframe style={{pointerEvents: "none", position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} src="https://media.flixel.com/cinemagraph/llnshyphvx0lmkz6ceqq?hd=true" frameBorder="0" allowFullScreen allow='autoplay'></iframe>
   <div style={{display:"flex",flexDirection:"row" , position:"absolute", top:'0', left:'0', width:'100%', height:'160px', justifyContent:"space-between"}}>
    <img style={{paddingTop:"50px", paddingLeft:"50px", opacity:"0.8",height:"170px", width:'auto'}} src= "3ac62a16-a8a2-4ed6-a29a-6d8df9a6106f_200x200 (1).png"></img>
   
<Button onClick={toggleDrawer('left', true)} className={state.arrowDown?"startArrow": "endArrow"}> 
     <a className ="test">
     <img  style={{paddingTop:"50px", paddingRight:"45px",opacity:"0.8",height:"100px", width:'auto'}} src="white-down-arrow-png-2.png"></img>
    </a></Button>


   </div> 
   <div>
   <input id='autoComplete' onChange={props.onInputChange} onKeyPress={props.onSubmit} style={{display:"flex",flexDirection:"row" ,position:"absolute", marginTop:'20', bottom:"20",top:'14%', left:'38%' , justifyContent:"center",
        fontFamily: "Helvetica Neue",fontStyle: 'normal',fontSize: '45px',border:"none", borderBottom:"4px solid black",textAlign:'center', opacity:"0.8",backgroundColor:'transparent', height:"45px", marginTop:'350px', width:'580px',borderBottomColor:'white'}} type="text" placeholder="Where are you going?" name="search"></input>
    </div>
</div>
</div>
    

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components'; 
// import axios from 'axios'; 
// import {
//     Button,
//     Checkbox,
//     Grid,
//     Header,
//     Icon,
//     Image,
//     Menu,
//     Segment,
//     Sidebar,
//   } from 'semantic-ui-react';
// //   import GridExampleCelledInternally from "./Grid.js";
  

// // import Sidebar from './SideBar.js';

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
.startArrow: focus{
    transition:transform 0.5s linear; 
    transform: rotate(0deg);
}
.endArrow:focus  {
    transition: transform 0.5s linear;
    transform: rotate(90deg);

}
input, select, textarea{
    color: #fff;
    opacity: 0.8
}


.background{
  background-color:white;
  cursor: pointer;
  max-height: 220px;
  overflow-y: auto;
  padding: 0 20px 0 30px;
  padding-top: 5px;
  padding-bottom: 5px;

}`; 

//  class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         visible: false,
//         animation: 'overlay',
//         direction: 'left',
//         dimmed: false,
//     };
//     this.url  =`ocean.mp3`;
//     this.audio = new Audio(this.url); 
//     this.arrowClick= this.arrowClick.bind(this);
//     this.handleSidebarHide= this.handleSidebarHide.bind(this);
//   }  

//   arrowClick(){
//     this.setState({direction: 'left', visible:true, dimmed: true});
//     console.log('we clicked theee arrow');
//   };
//   handleSidebarHide(){
//     this.setState({visible: false });
//     this.setState({dimmed:false});
//   }  

//   render(){  
//     const { animation, dimmed, direction, visible} = this.state;
//     // const vertical = direction === 'bottom' || direction === 'top';
      
//     return ( 
//     <>
// <StyledDiv>
// <Sidebar.Pushable as={Segment}>

//  <Sidebar
//       className='sidebar'
//       as={Menu}
//       animation= "overlay"
//       direction= {direction}
//       inactive= 'true'
//       inverted
//       vertical
//       visible= {visible}
//       width='thin'
//       onHide={this.handleSidebarHide}
//     >
//       <Menu.Item as='a'>
//         About
//       </Menu.Item>
//       <Menu.Item as='a'>
//         Itinerary
//       </Menu.Item>
//       <Menu.Item as='a'>
//         Our Picks
//       </Menu.Item>
//       <Menu.Item as='a'>
//         Connect
//       </Menu.Item>
//       <Menu.Item as='a'>
//         Press
//       </Menu.Item>
//     </Sidebar>
//     <Sidebar.Pusher dimmed={visible}>
//     <Segment >
//     <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>
//     <iframe style={{pointerEvents: "none", position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} src="https://media.flixel.com/cinemagraph/llnshyphvx0lmkz6ceqq?hd=true" frameBorder="0" allowFullScreen allow='autoplay'></iframe>
//     <div style={{display:"flex",flexDirection:"row" , position:"absolute", top:'0', left:'0', width:'100%', height:'160px', justifyContent:"space-between"}}>
//     <img style={{paddingTop:"50px", paddingLeft:"50px", opacity:"0.8",height:"170px", width:'auto'}}src="16a60b31-4a4b-41eb-9cf2-b6f71c4a83e5_200x200.png"></img>
   
//     <Button  disabled={visible} active={direction === 'left'} onClick={this.arrowClick}>
//     <a className ="test">
//     <img className="crossRotate" style={{paddingTop:"50px", paddingRight:"45px",opacity:"0.8",height:"100px", width:'auto'}} src="white-down-arrow-png-2.png"></img>
//     </a>
//    </Button>


//     </div> 
//     <div>
//     <input id='autoComplete' onChange={this.props.onInputChange} onKeyPress={this.props.onSubmit} style={{display:"flex",flexDirection:"row" ,position:"absolute", marginTop:'20', bottom:"20",top:'14%', left:'38%' , justifyContent:"center",
//         fontFamily: "Helvetica Neue",fontStyle: 'normal',fontSize: '40px',border:"none", borderBottom:"4px solid black",textAlign:'center', opacity:"0.8",backgroundColor:'transparent', height:"45px", marginTop:'350px', width:'450px',borderBottomColor:'white'}} type="text" placeholder="Where are you going?" name="search"></input>
//     </div>
// </div>
// </Segment>

//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//     </StyledDiv>
//    </>
//     );
//   }
// }

// export default SearchBar;


