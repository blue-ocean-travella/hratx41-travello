import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../modalDescription/modalDescription.css';
import StarRatings from '../../../node_modules/react-star-ratings';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const apiKey = process.env.API_KEY;


// import TimePicker from 'react-bootstrap-time-picker';
// var  TimePicker  = require('react-bootstrap-time-picker');
// import TimePicker from 'react-time-picker';
// var TimePicker = require('basic-react-timepicker');

const ModalDescription = ({ show, onHide, handleClose, handleTimeChange, goToItinerary, time, onTimeChangeHandler, dataResult = {} }) => {
  // let open;
  // s
  // let phoneFirstDigits = dataResult.phone.slice(0, 3).join('');
  // let phoneRestDigits =  dataResult.phone.slice(3);
  // let phone = `(${phoneFirstDigits}) ${phoneRestDigits}`;

  let hoursOfoperations = dataResult.hoursOfOperation || ["Monday: 9:00 AM - 5:00 PM", "Tuesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Wednesday: 9:00 AM - 5: 00 AM", "Thursday: 9:00 AM - 5: 00 AM", "Friday: 9:00 AM - 5: 00 AM", "Saturday: Closed", "Sunday: Closed"];
  let lat = dataResult.lat;
  let long = dataResult.long;
  // console.log(lat, long, 'this is LAT LONG')
  // console.log(hoursOfoperation[0]);

  if (dataResult.openOrNot === true) {
    open = 'Open';
  } else {
    open = 'Close';
  }

  //  console.log(dataResult.photos, 'this is PHOTOS');
  let photo = Array.isArray(dataResult.photos) ? dataResult.photos[0] : 'http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg';

  return (
    <Modal show={show} onHide={onHide} className='modal-container'
      size='lg'
      scrollable='true'
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-200w"
      centered
    >

      <Modal.Header closeButton>
        <Modal.Title id='modalTitle'></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='imagesMapAndDescriptionContainer'>
          <div className='imageAndMap-container'>
            <img src={photo} className='imagePlace'></img>
            <div className='google-map-description'>
              <LoadScript id="timeline-map-script-loader" googleMapsApiKey={apiKey}>
                <GoogleMap
                  id='timeline-modal-map'
                  mapContainerStyle={{
                    height: '200px',
                    width: '350px'
                  }}

                  zoom={16}
                  center={{
                    lat: lat,
                    lng: long
                  }}
                />
              </LoadScript>
            </div>
          </div>
          <div>
            <div className='modalPlaceName'>
              {dataResult.name}
            </div>
            <div>
              <span className='modalDescription_rating'>{dataResult.rating}</span>
              <StarRatings
                rating={Number(dataResult.rating)}
                starRatedColor="blue"
                // changeRating={this.changeRating}
                starDimension="13px"
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
              {dataResult.longDescription}
            </div>
            <div className='modal-addres-hours-phone-info'>
              <div>
                <b>Addres:</b> <span>{dataResult.address}</span>
              </div>
              <div>
                <b>Phone:</b> <span>{dataResult.phoneNumber}</span>
              </div>
              <div>
                <b>Hours of operation:</b>
                <ul>
                  {hoursOfoperations.map((el, i) => {
                    return <li key={i}>{el}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className='closeButton-modal-description'>
          Close
        </Button>
        <Button variant="secondary" onClick={goToItinerary} className='selectTime-modal-description'>
          Select Time
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDescription;
