import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../modalTime/modalTime.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import '../../../node_modules/rc-time-picker/assets/index.css';
// import TimePicker from 'react-bootstrap-time-picker';
// var  TimePicker  = require('react-bootstrap-time-picker');
// import TimePicker from 'react-time-picker';
// var TimePicker = require('basic-react-timepicker');

const ModalTime = ({dataResult, show, onHide, handleCloseModalTime, handleTimeChange, addToItenerary }) => { 

const format = 'h:mm a';
const now = moment().hour(0).minute(0);
function onChange(value) {
  console.log(value && value.format(format));
}
  return (
    <Modal show={show} onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Header closeButton>
        <Modal.Title id='modalTitle'>{dataResult.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className='selectTime-section'> 
          <div style={{fontWeight:'bold'}}>Select time:</div><br/>
          <div>
            <TimePicker
              showSecond={false}
              defaultValue={now}
              className="xxx"
              onChange={handleTimeChange}
              format={format}
              use12Hours
              inputReadOnly
            />
          </div>
          </div>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModalTime}>
         Close
        </Button>
        <Button variant="primary" onClick={addToItenerary}>
          Add to itinerary
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTime;
  