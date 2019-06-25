import React, { Component } from 'react';
import StarRatings from '../../../node_modules/react-star-ratings';
import ModalDescription from '../modalDescription/modalDescription.jsx';
import ModalTime from  '../modalTime/modalTime.jsx';
import './result.css'

class Result extends Component {
  constructor(props) {
    super()
    this.state = {
      show: false,
      showTimeModal: false,
      time: '',
  };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCloseModalTime = this.handleCloseModalTime.bind(this);
    this.handleShowModalTime = this.handleShowModalTime.bind(this);
    this.createItineraryObject = this.createItineraryObject.bind(this);


  
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
    })
   
    // this.setState({
    //   time: e.target.value,
    // })
  }

  createItineraryObject () {
    const destination = {
      name: this.props.dataResult.name,
      duration: this.state.time,
      description: this.props.dataResult.bigDescription,
      image: this.props.dataResult.image
    }

    this.props.handdleAddToItenerary(destination);
  }

  render() {
    return (
     <div className="card card_result" style={{width: '30rem'}}>
        <div className="card bg-dark text-white card_result">
         <img src={this.props.dataResult.image} className="card-img image-result-card" alt="..."/>
         <a href="#" className='modal-button' onClick={() => this.handleShow()}>
          <div className="card-img-overlay">
           <h5 className="card-title result-position" >{this.props.dataResult.name}</h5>
        </div>
        </a>
        <ModalDescription dataResult={this.props.dataResult} show={this.state.show} onHide={this.handleClose} handleClose={this.handleClose} handleTimeChange={this.handleTimeChange} time={this.state.time} onTimeChangeHandler={this.onTimeChangeHandler}/>
        </div>
        <div className="card-body">
          <div>
            <span className="result_rating">{this.props.dataResult.rating}</span>
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
            <span className="result_total_reviews">{`${this.props.dataResult.totalReviews} reviews`}</span>
          </div>
          <div className="result_distance_time_section_container">
            <div className="card-text"> 
                <span className="distance">{`${this.props.dataResult.distance} mi`}</span> <span className="available_and_time">OPEN TODAY</span> <span className="available_and_time">10 AM - 3PM</span>
            </div>
            <a href="#" className="btn btn-primary addToItenerary" onClick={() => this.handleShowModalTime()}>+</a>
            <ModalTime dataResult={this.props.dataResult} show={this.state.showTimeModal} onHide={this.handleCloseModalTime} handleCloseModalTime={this.handleCloseModalTime} handleTimeChange={this.handleTimeChange} addToItenerary={this.createItineraryObject}/>
          </div>
          <p className="card-text description_place">{this.props.dataResult.description}</p>      
        </div>
     </div>
    )
  }
}

export default Result;