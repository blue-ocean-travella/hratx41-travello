import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

// timeline card icons

import clock from '../../assets/images/clock.jpg';
import xout from '../../assets/images/xout.png';
import map from '../../assets/images/directions.png';

// timeline icons

import nightlife from '../../assets/images/martini.png';
import dine from '../../assets/images/food.png';
import todos from '../../assets/images/thingstodo.png';
import topSpot from '../../assets/images/topspot.png';
import dayTrip from '../../assets/images/daytrip2.png';

// modals

import DescriptionModal from './DescriptionModal.jsx';
import TimeModal from './TimeModal.jsx';
import MapModal from './MapModal.jsx';
import Axios from 'axios';


class TimelineActivity extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showDescriptionModal: false,
            showTimeModal: false,
            showMapModal: false
        }

        this.handleDeleteItemClick = this.handleDeleteItemClick.bind(this);
        this.handleShowTimeModal = this.handleShowTimeModal.bind(this);
        this.handleCloseTimeModal = this.handleCloseTimeModal.bind(this);
        this.handleShowDescriptionModal = this.handleShowDescriptionModal.bind(this);
        this.handleCloseDescriptionModal = this.handleCloseDescriptionModal.bind(this);
        this.handleShowMapModal = this.handleShowMapModal.bind(this);
        this.handleCloseMapModal = this.handleCloseMapModal.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getIcon = this.getIcon.bind(this);

    }

    // delete function

    handleDeleteItemClick(event) {
        // let currentItineraryUuid = event.target.value.uuid;
        console.log('delete one clicked')
        // Axios.delete('/itineraries', { params: { uuid: currentItineraryUuid } })
        //     .then((response) => {
        //         console.log('item correctly deleted from itinerary: ', response)
        //     })
        //     .catch((error) => {
        //         console.log('error deleting itinerary item: ', error)
        //     })
    }

    // modal open/close functions

    handleShowDescriptionModal() {
        this.setState({ showDescriptionModal: true });
    }

    handleCloseDescriptionModal() {
        this.setState({ showDescriptionModal: false });
    }

    handleShowTimeModal() {
        this.setState({ showTimeModal: true });
    }

    handleCloseTimeModal() {
        this.setState({ showTimeModal: false });
    }

    handleShowMapModal() {
        this.setState({ showMapModal: true });
    }

    handleCloseMapModal() {
        this.setState({ showMapModal: false });
    }

    // rendering helper functions

    getPosition(direction) {
        let position = '';
        if (direction % 2 === 0) {
            position = 'left';
        } else {
            position = 'right';
        }
        return position
    }

    getIcon(category) {
        let iconImage = '';
        if (category === 'nightLife') {
            iconImage = nightlife;
        }
        if (category === 'restaurants') {
            iconImage = dine;
        }
        if (category === 'thingsToDo') {
            iconImage = todos;
        }
        if (category === 'dayTrips') {
            iconImage = dayTrip;
        }
        if (category === 'topSpots') {
            iconImage = topSpot;
        }
        return iconImage;
    }

    render() {

        return (
            < div className="timeline-line" >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={this.props.activity.location.startTime}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img className="nightlife-icon" src={this.getIcon(this.props.activity.location.category)}></img>}
                    position={this.getPosition(this.props.position)}
                >

                    <div className="timeline-element-outer-container">
                        <a className="timeline-element-top-container">
                            <img src={this.props.activity.location.image} className="timeline-image" onClick={this.handleShowDescriptionModal}></img>
                            <h3 className="vertical-timeline-element-title">{this.props.activity.location.name}</h3>
                        </a>
                        <DescriptionModal show={this.state.showDescriptionModal} onHide={this.handleCloseDescriptionModal} handleClose={this.handleCloseDescriptionModal} activity={this.props.activity} />
                        <div className="timeline-information">
                            <div className="time"><span className="duration">Visit Duration:</span> {this.props.activity.location.duration} hr</div>
                            <div className="timeline-description">
                                {this.props.activity.location.description}
                            </div></div></div>

                    <div className="timeline-element-container">
                        <a className="timeline-open btn" onClick={this.handleShowTimeModal}>
                            <img className="timeline-clock" src={clock}></img>
                        </a>
                        <TimeModal className="time-modal" show={this.state.showTimeModal} onHide={this.handleCloseTimeModal} handleClose={this.handleCloseTimeModal} activity={this.props.activity} />
                        <a className="timeline-goto btn" onClick={this.handleShowMapModal}>
                            <img className="timeline-map" src={map}></img>
                        </a>
                        <MapModal show={this.state.showMapModal} onHide={this.handleCloseMapModal} handleClose={this.handleCloseMapModal} activity={this.props.activity} />
                        <a className="remove-container btn" onClick={this.handeleDeleteClick}>
                            <img onClick={this.handleDeleteItemClick} className="remove-image" src={xout}></img>
                        </a>
                    </div>
                </ VerticalTimelineElement>
            </div >
        )
    }
}

export default TimelineActivity;