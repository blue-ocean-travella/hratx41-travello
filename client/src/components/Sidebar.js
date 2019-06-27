// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import {
//   Button,
//   Checkbox,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   Menu,
//   Segment,
//   Sidebar,
// } from 'semantic-ui-react';


// const VerticalSidebar = ({ animation, direction, visible }) => (
//   <Sidebar
//     as={Menu}
//     animation={animation}
//     direction={direction}
//     icon='labeled'
//     inverted
//     vertical
//     visible={visible}
//     width='thin'
//   >
//     <Menu.Item as='a'>
//       <Icon name='home' />
//       Home
//     </Menu.Item>
//     <Menu.Item as='a'>
//       <Icon name='gamepad' />
//       Games
//     </Menu.Item>
//     <Menu.Item as='a'>
//       <Icon name='camera' />
//       Channels
//     </Menu.Item>
//   </Sidebar>
// );

// VerticalSidebar.propTypes = {
//   animation: PropTypes.string,
//   direction: PropTypes.string,
//   visible: PropTypes.bool,
// };

// export default class SidebarExampleTransitions extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     animation: 'overlay',
//     direction: 'left',
//     dimmed: false,
//     visible: false,
//   }; 
// }

//   handleAnimationChange (animation) {
//     this.setState(prevState => ({ animation, visible: !prevState.visible }))};

//   handleDimmedChange (e, { checked }) { this.setState({ dimmed: checked })};

//   handleDirectionChange (direction) { this.setState({ direction, visible: false })};

//   render() {
//     const { animation, dimmed, direction, visible } = this.state
//     const vertical = direction === 'bottom' || direction === 'top';

//     return (
//       <div>
//         <Checkbox checked={dimmed} label='Dim Page' onChange={this.handleDimmedChange} toggle />

//         <Header as='h5'>Direction</Header>
//         <Button.Group>
//           <Button active={direction === 'left'} onClick={this.handleDirectionChange('left')}>
//             Left
//           </Button>
//           <Button active={direction === 'right'} onClick={this.handleDirectionChange('right')}>
//             Right
//           </Button>
//           <Button active={direction === 'top'} onClick={this.handleDirectionChange('top')}>
//             Top
//           </Button><Button active={direction === 'right'} onClick={this.handleDirectionChange('right')}>
//             Right
//           </Button>
//           <Button active={direction === 'top'} onClick={this.handleDirectionChange('top')}>
//             Top
//           </Button>
//           <Button active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>
//             Bottom
//           </Button>
//         </Button.Group>

//         <Header as='h5'>All Direction Animations</Header>
//         <Button onClick={this.handleAnimationChange('overlay')}>Overlay</Button>

        
//         <Sidebar.Pushable as={Segment}>
//           {vertical ? null : (
//             <VerticalSidebar animation={animation} direction={direction} visible={visible} />
//           )}

//           <Sidebar.Pusher dimmed={dimmed && visible}>
//             <Segment basic>
//               <Header as='h3'>Application Content</Header>
//               <div style={{position:"relative", height:"0", paddingBottom:"56.22%",width:"100%"}}>
//     <iframe style={{pointerEvents: "none", position: "absolute", top:"0", left:"0", width:"100%", height:"100%"}} src="https://media.flixel.com/cinemagraph/llnshyphvx0lmkz6ceqq?hd=true" frameBorder="0" allowFullScreen allow='autoplay'></iframe>
//     <div style={{display:"flex",flexDirection:"row" , position:"absolute", top:'0', left:'0', width:'100%', height:'160px', justifyContent:"space-between"}}>
//     <img style={{paddingTop:"50px", paddingLeft:"50px", opacity:"0.8",height:"170px", width:'auto'}}src="16a60b31-4a4b-41eb-9cf2-b6f71c4a83e5_200x200.png"></img>
//     <a className ="test">
//     <img disabled={visible} direction={direction} onClick={this.arrowClick} className="crossRotate" style={{paddingTop:"50px", paddingRight:"45px",opacity:"0.8",height:"100px", width:'auto'}} src="white-down-arrow-png-2.png"></img>
//     </a>

//     </div> 
//     <div >
//     <input id='autoComplete' onChange={this.props.onInputChange} onKeyPress={this.props.onSubmit} style={{display:"flex",flexDirection:"row" ,position:"absolute", marginTop:'20', bottom:"20",top:'14%', left:'38%' , justifyContent:"center",
//         fontFamily: "Helvetica Neue",fontStyle: 'normal',fontSize: '40px',border:"none", borderBottom:"4px solid black",textAlign:'center', opacity:"0.8",backgroundColor:'transparent', height:"45px", marginTop:'350px', width:'450px',borderBottomColor:'white'}} type="text" placeholder="Where are you going?" name="search"></input>
//     </div>
// </div>
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     );
//   };
// };