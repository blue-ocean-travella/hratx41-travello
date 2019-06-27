import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import StarRatings from '../node_modules/react-star-ratings';

const DescriptionModal = (props) => {
    // console.log('DescriptionModal props: ', props)
    return (
        <Modal show={props.show} onHide={props.onHide} className='modal-container'
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id='modalTitle'>Location Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='imagesMapAndDescriptionContainer'>
                    <div className='imageAndMap-container'>
                    </div>
                    <div>
                        <div className='modalPlaceName'>
                        </div>
                        <div>
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
                                <a className='modal-totalReviews' href='#'> Google Reviews</a>
                            </span>
                        </div>
                        <div className='modal-bigDescription'>
                        </div>
                        <div className='modal-addres-hours-phone-info'>
                            <div>
                                <b>Address:</b>
                            </div>
                            <div>
                                <b>Hours:</b>
                            </div>
                            <div>
                                <b>Phone:</b>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    );
}


export default DescriptionModal;