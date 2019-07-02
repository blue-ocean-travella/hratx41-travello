import React, { Component } from 'react';
import StarRatings from '../../../node_modules/react-star-ratings';
import ModalDescription from '../modalDescription/modalDescription.jsx';
import ModalTime from  '../modalTime/modalTime.jsx';
import '../result/result.css';
import axios from 'axios';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showTimeModal: false,
      time: '0:00',
      duration: 1
  };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCloseModalTime = this.handleCloseModalTime.bind(this);
    this.handleShowModalTime = this.handleShowModalTime.bind(this);
    this.createItineraryObject = this.createItineraryObject.bind(this);
    this.goToItinerary = this.goToItinerary.bind(this);
    this.changeDuration = this.changeDuration.bind(this);
  } 

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleShowModalTime() {
    this.setState({ showTimeModal: true });
  }

  handleCloseModalTime() {
    this.setState({ showTimeModal: false });
  }

  handleTimeChange(e) {
    let hour = e.hours();
    let minutes = e.minutes().toString();
    // let amOrPm = 'am';
    
    if(minutes.length === 1) {
      minutes = 0 + minutes;
    }
    // if(hour === 0) {
    //   hour = 12;
    //   amOrPm = 'am';
    // } else if (hour === 12) {
    //   hour = 12;
    //   amOrPm = 'pm';
    // }
   
    // if(hour >= 13) {
    //   hour =  Number(hour) - 12;
    //   amOrPm = 'pm';
    // }
    // console.log(`${hour}:${minutes}`)
    this.setState({
      time : `${`${hour}:${minutes}`}`
    });
  }

  createItineraryObject () {
    // console.log(this.props.dataResult.city);
      
    
    const destination = {
      city: this.props.city,
      name: this.props.dataResult.name,
      hoursOfOperation: this.props.dataResult.hoursOfOperations,
      longitude: this.props.dataResult.long,
      latitude: this.props.dataResult.lat,
      numberOfReviews:  this.props.dataResult.totalReviews,
      rating: this.props.dataResult.rating,
      address:  this.props.dataResult.address,
      open: this.props.dataResult.openOrNot,
      phone: this.props.dataResult.phoneNumber,
      images: this.props.dataResult.photos,
      website:  this.props.dataResult.websiteUrl,
      startTime: this.state.time,
      duration: this.state.duration,
      description: this.props.dataResult.description,
      category: this.props.currentCategory   
    };

    // console.log(destination);
    axios.post('/activity', destination)
       .then(response => {
         console.log(response, 'succesfully posted!')
       })
       .catch(err => {
         console.log(err, 'there is an error')
       })
    // this.props.handdleAddToItenerary(destination);
    this.setState({ showTimeModal: false });
  }
  goToItinerary () {
    this.setState({
      show: false,
      showTimeModal: true,
    });

    return (
      <ModalTime dataResult={this.props.dataResult} show={this.state.showTimeModal} onHide={this.handleCloseModalTime} handleCloseModalTime={this.handleCloseModalTime} handleTimeChange={this.handleTimeChange} addToItenerary={this.createItineraryObject}/>
    );
  }

  changeDuration (duration) {

    this.setState({duration: duration});

  }

  render() {
    // console.log(this.props.id);
    // console.log(this.props.dataResult.photos, 'THIS IS DATARESULT')
    let photo = (this.props.dataResult.photos && this.props.dataResult.photos.length > 1)? this.props.dataResult.photos[0]:'http://48tx1q1rrcysi4t7l687xbtt.wpengine.netdna-cdn.com/wp-content/uploads/2011/05/Texas-Capitol-Austin-700x483.jpg';

    return (
     <div className="card card_result" style={{width: '24rem'}}>
        <div className="card bg-dark text-white card_result">
         <img src={photo} className="card-img image-result-card" alt="..."/>
         <a href="#" className='modal-button' onClick={() => this.handleShow()}>
          <div className="card-img-overlay">
           <h5 className="card-title result-position" >{this.props.dataResult.name}</h5>
        </div>
        </a>
        <ModalDescription dataResult={this.props.dataResult} show={this.state.show} onHide={this.handleClose} handleClose={this.handleClose} handleTimeChange={this.handleTimeChange} time={this.state.time} onTimeChangeHandler={this.onTimeChangeHandler} goToItinerary={this.goToItinerary}/>
        </div>
        <div className="card-body">
          <div>
            <span className="result_rating">{this.props.dataResult.rating}</span>
            <StarRatings
                rating={Number(this.props.dataResult.rating)}
                starRatedColor="blue"
                // changeRating={this.changeRating}
                starDimension="13px"
                starSpacing=".5px"
                numberOfStars={5}
                name='rating'
                starRatedColor="#f08804"
            />   
            <span className='result_total_reviews'>{`${this.props.dataResult.totalReviews} reviews`}</span>
          </div>
          <div className='result_distance_time_section_container'>
            <div className="card-text"> 
                <div>
                <span className='address'>{`${this.props.dataResult.address}`}</span>
                </div>
                <div className='webSite'>
                  <a href={`${this.props.dataResult.websiteUrl}`}>{this.props.dataResult.websiteUrl}</a>
                </div>
            </div>
            <div>
            <a href="#" className="btn btn-primary addToItenerary" onClick={() => this.handleShowModalTime()}>+</a>
            </div>
            <ModalTime dataResult={this.props.dataResult} show={this.state.showTimeModal} onHide={this.handleCloseModalTime} handleCloseModalTime={this.handleCloseModalTime} handleTimeChange={this.handleTimeChange} addToItenerary={this.createItineraryObject} changeDuration={this.changeDuration}/>
          </div>      
        </div>
     </div>
    );
  }
}

export default Result;

