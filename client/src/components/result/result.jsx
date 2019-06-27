import React, { Component } from 'react';
import StarRatings from '../../../node_modules/react-star-ratings';
import ModalDescription from '../modalDescription/modalDescription.jsx';
import ModalTime from  '../modalTime/modalTime.jsx';
import './result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showTimeModal: false,
      time: '12:00 pm',
      // duration: null,
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
    let amOrPm = 'am';
    
    if(minutes.length === 1) {
      minutes = 0 + minutes;
    }

    if(hour === 0) {
      hour = 12;
      amOrPm = 'am';
    } else if (hour === 12) {
      hour = 12;
      amOrPm = 'pm';
    }
   
    if(hour >= 13) {
      hour =  Number(hour) - 12;
      amOrPm = 'pm';
    }

    this.setState({
      time : `${`${hour}:${minutes} ${amOrPm}`}`
    });
  }



  createItineraryObject () {
    const destination = {
      name: this.props.dataResult.name,
      start_time: this.state.time,
      duration: this.state.duration,
      description: this.props.dataResult.bigDescription,
      image: this.props.dataResult.image,
      category: this.props.currentCategory,
      lat: 30.265824,
      lng: -97.74926,
      uuid: 1,

      
      // category: 
    };

    // console.log(destination);

    // this.props.handdleAddToItenerary(destination);
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
    // console.log(this.state.duration, 'before')
    // this.setState({
    //   duration : duration,
    // })
    // this.setState((prevState) => {duration: duration})
    // this.setState({duration: duration}, () => {
    //   console.log(this.state.duration, 'inside set')
    //   this.setState({duration: duration});
    // })

    this.setState({duration: duration});
    // console.log(this.state.duration, 'after');
  }

  render() {
    // console.log(this.props.id);
    return (
     <div className="card card_result" style={{width: '30rem'}}>
        <div className="card bg-dark text-white card_result">
         <img src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg" className="card-img image-result-card" alt="..."/>
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
                starDimension="17px"
                starSpacing=".5px"
                numberOfStars={5}
                name='rating'
                starRatedColor="#f08804"
            />   
            <span className="result_total_reviews">{`${this.props.dataResult.userRating} reviews`}</span>
          </div>
          <div className="result_distance_time_section_container">
            <div className="card-text"> 
                <span className="address">{`${this.props.dataResult.address}`}</span>
            </div>
            <a href="#" className="btn btn-primary addToItenerary" onClick={() => this.handleShowModalTime()}>+</a>
            <ModalTime dataResult={this.props.dataResult} show={this.state.showTimeModal} onHide={this.handleCloseModalTime} handleCloseModalTime={this.handleCloseModalTime} handleTimeChange={this.handleTimeChange} addToItenerary={this.createItineraryObject} changeDuration={this.changeDuration}/>
          </div>      
        </div>
     </div>
    );
  }
}

export default Result;