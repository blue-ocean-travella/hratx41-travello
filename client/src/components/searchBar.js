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
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import Axios from 'axios';
import Script from 'react-load-script';
import Input from './input';

const apiKey = process.env.API_KEY;

console.log(apiKey);

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
      <img style={{paddingTop:"43px", paddingLeft:"50px",height:"170px", width:'auto'}} src="3ac62a16-a8a2-4ed6-a29a-6d8df9a6106f_200x200 (1).png"></img>   
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

        

  return (
    <div id="bootstrap-overrides">
    
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

<Input setResults={props.setResults} nextPage={props.nextPage} />

</div>
</div>
</div>
    

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}



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








/* <input id='autoComplete' onChange=props.onInputChange onKeyPress=props.onSubmit style=display:"flex",flexDirection:"row" ,position:"absolute", marginTop:'20', bottom:"20",top:'14%', left:'38%' , justifyContent:"center",
        fontFamily: "Helvetica Neue",fontStyle: 'normal',fontSize: '45px',border:"none", borderBottom:"4px solid black",textAlign:'center', opacity:"0.8",backgroundColor:'transparent', height:"45px", marginTop:'350px', width:'580px',borderBottomColor:'white'}} type="text" placeholder="Where are you going?" name="search"></input> */