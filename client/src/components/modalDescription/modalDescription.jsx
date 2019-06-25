import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../modalDescription/modalDescription.css'
import StarRatings from '../../../node_modules/react-star-ratings';


// import TimePicker from 'react-bootstrap-time-picker';
// var  TimePicker  = require('react-bootstrap-time-picker');
// import TimePicker from 'react-time-picker';
// var TimePicker = require('basic-react-timepicker');

const ModalDescription = ({show, onHide, handleClose, handleTimeChange, goToItinerary, time, onTimeChangeHandler, dataResult}) => {
  console.log(handleTimeChange)
  let open;
  let closeTime=dataResult.time.slice(5);
  // let phoneFirstDigits = dataResult.phone.slice(0, 3).join('');
  // let phoneRestDigits =  dataResult.phone.slice(3);
  // let phone = `(${phoneFirstDigits}) ${phoneRestDigits}`;
  if(dataResult.open === true) {
    open = 'Open';
  } else {
    open = 'Close';
  }
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
        <div className='imagesMapAndDescriptionContainer'>
          <div className='imageAndMap-container'>
            <img src={dataResult.image} className='imagePlace'></img>
            <img src={dataResult.image} className='imageMap'></img>
          {/* <img src={dataResult.image}></img> */}
          </div>
          <div>
            <div className='modalPlaceName'>
              {dataResult.name}
            </div>
            <div>
              <span>{dataResult.rating}</span>
              <StarRatings
                rating={3}
                starRatedColor="blue"
                // changeRating={this.changeRating}
                starDimension="17px"
                starSpacing=".5px"
                numberOfStars={5}
                name='rating'
                starRatedColor="#f08804"
              />  
              <span>
                 <a className='modal-totalReviews' href='#'>{dataResult.totalReviews} Google Reviews</a>
              </span>
            </div>
            <div className='modal-bigDescription'>
              {dataResult.bigDescription}
            </div>
            <div className='modal-addres-hours-phone-info'>
              <div>
                <b>Addres:</b> <span>{dataResult.address}</span>
              </div>
              <div>
                <b>Hours:</b> <b>{open}</b> <span>Closes at {closeTime} </span>
              </div>
              <div>
                <b>Phone:</b> <span>{dataResult.phone}</span>
              </div>
            </div>
          </div>
        </div>
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
        <Button variant="primary" onClick={goToItinerary}>
        Select Time
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDescription;
  