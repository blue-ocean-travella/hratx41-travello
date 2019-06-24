import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../modalTime/modalTime.css'
// import TimePicker from 'react-bootstrap-time-picker';
// var  TimePicker  = require('react-bootstrap-time-picker');
// import TimePicker from 'react-time-picker';
// var TimePicker = require('basic-react-timepicker');

const ModalDescription = ({show, onHide, handleClose, handleTimeChange, time, onTimeChangeHandler}) => { 
  return (
    <Modal show={show} onHide={onHide} className='modal-container'
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Header closeButton>
        <Modal.Title id='modalTitle'></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        {/* <TimePicker className='timePicker'>
          onChange={handleTimeChange}
          value={time}
          disabled= {true}
        </TimePicker> */}
        {/* <TimePicker start="10:00" end="21:00" step={30} /> */}
        {/* <TimePicker  name="defaul"/> */}
        <div>
            HELLO HELLO HELLO HELLO  HELLO
        </div>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
        Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDescription;
  