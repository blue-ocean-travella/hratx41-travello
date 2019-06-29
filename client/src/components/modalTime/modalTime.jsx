import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../modalTime/modalTime.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import '../../../node_modules/rc-time-picker/assets/index.css';
// import TimePicker from 'react-bootstrap-time-picker';
// var  TimePicker  = require('react-bootstrap-time-picker');
// import TimePicker from 'react-time-picker';
// var TimePicker = require('basic-react-timepicker');

// const ModalTime = ({dataResult, show, onHide, handleCloseModalTime, handleTimeChange, addToItenerary, changeDuration }) => { 

class ModalTime extends Component {

constructor(props) {
  super(props);
  this.state = {
    activeDuration: null
  }

  this.changeStyleWhenClicked = this.changeStyleWhenClicked.bind(this);
  this.handleClickToChangeStyleAndDuration = this.handleClickToChangeStyleAndDuration.bind(this);
}

changeStyleWhenClicked (key) {
  this.setState({
    activeDuration: key
  })
  
}

handleClickToChangeStyleAndDuration (duration) {
  this.props.changeDuration(duration);
  this.changeStyleWhenClicked(duration);
}


// function onChange(value) {
//   console.log(value && value.format(format));
// }

render () {
  const format = 'h:mm a';
  const now = moment().hour(0).minute(0);
  return (
  
    <Modal show={this.props.show} onHide={this.props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Header closeButton>
        <Modal.Title id='modalTitle'>{this.props.dataResult.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className='selectTime-section'> 
          <div style={{fontWeight:'bold', textAlign:'center'}}>Select your time:</div><br/>
          <div className='selectDropDownTime'>
            <TimePicker
              showSecond={false}
              defaultValue={now}
              className="xxx"
              onChange={this.props.handleTimeChange}
              format={format}
              use12Hours
              inputReadOnly
            />
          </div>
          </div>
          <div className='durationTime'>
            <div style={{fontWeight:'bold', textAlign:'center'}}>Duration:</div><br/>
            <div className='durationHoursOptions'>
                <button className={`durationOption ${this.state.activeDuration === 1 ? 'activeDuration' :  ''}`} onClick={() => {this.handleClickToChangeStyleAndDuration(1);}} style={this.state.style}> 1Hr </button>
                <button className={`durationOption ${this.state.activeDuration === 2 ? 'activeDuration' :  ''}`} onClick={() => {this.handleClickToChangeStyleAndDuration(2);}} style={this.state.style}> 2Hr </button>
                <button className={`durationOption ${this.state.activeDuration === 3 ? 'activeDuration' :  ''}`} onClick={() => {this.handleClickToChangeStyleAndDuration(3);}} style={this.state.style}> 3Hr</button>
                <button className={`durationOption ${this.state.activeDuration === 4 ? 'activeDuration' :  ''}`} onClick={() => {this.handleClickToChangeStyleAndDuration(4);}} style={this.state.style}> 4Hr </button>
            </div>
          </div>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.props.handleCloseModalTime} className='closeModalTime'>
         Close
        </Button>
        <Button variant="secondary" onClick={this.props.addToItenerary} className='addToItinerary-Button'>
          Add to itinerary
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
};

// const callChangeDurationAndStyleFunctions = (changeDuration, number, styleChanger) => {
//    changeDuration(number);
//    styleChanger();  
// }
export default ModalTime;
  