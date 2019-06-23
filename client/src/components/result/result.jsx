import React, { Component } from 'react';
import StarRatings from '../../../node_modules/react-star-ratings';
import './result.css'

const Result = () => {
    return (
     <div className="card" style={{width: '18rem'}}>
        <div className="card bg-dark text-white">
         <img src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/austin/Barton-Springs-Photo-Credit-Austin-Convention-Visitors-Bureau_72dpi_2b98f9c6-dab3-628a-c9075a49719a59cb.jpg" className="card-img" alt="..."/>
          <div className="card-img-overlay">
           <h5 className="card-title result-position" >Barton Spring Municipal Pool</h5>
        </div>
        </div>
        <div className="card-body">
          <div>
            <span>4.5</span>
              <StarRatings
                rating={3}
                starRatedColor="blue"
                // changeRating={this.changeRating}
                starDimension="17px"
                starSpacing="1px"
                numberOfStars={6}
                name='rating'
            />
            <span>150 reviews</span>
          </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary addToItenerary">+</a>
        </div>
     </div>
    )
}

export default Result;