import React, { Component } from 'react';
import StarRatings from '../../../node_modules/react-star-ratings';
import ModalTime from '../modal-time/modalTime.jsx';
import './result.css'

class Result extends Component {
  constructor(props) {
    super()
    this.state = {
      show: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  } 

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
        <ModalTime show={this.state.show} onHide={this.handleClose} handleClose={this.handleClose}/>
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
            <a href="#" className="btn btn-primary addToItenerary">+</a>
          </div>
          <p className="card-text description_place">{this.props.dataResult.description}</p>      
        </div>
     </div>
    )
  }
}

export default Result;