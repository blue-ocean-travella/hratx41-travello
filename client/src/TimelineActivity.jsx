import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import austin from '../assets/images/austin.jpg';
import clock from '../assets/images/clock.jpg';
import xout from '../assets/images/xout.png';
import map from '../assets/images/directions.png';

import nightlife from '../assets/images/martini.png';
import dine from '../assets/images/food.png';
import todos from '../assets/images/thingstodo.png';
import topSpot from '../assets/images/topspot.png';
import dayTrip from '../assets/images/daytrip2.png';

import DescriptionModal from './DescriptionModal.jsx';
import TimeModal from './TimeModal.jsx';
import MapModal from './MapModal.jsx';





class TimelineActivity extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showDescriptionModal: false,
            showTimeModal: false,
            showMapModal: false
        }

        this.handleShowTimeModal = this.handleShowTimeModal.bind(this);
        this.handleCloseTimeModal = this.handleCloseTimeModal.bind(this);
        this.handleShowDescriptionModal = this.handleShowDescriptionModal.bind(this);
        this.handleCloseDescriptionModal = this.handleCloseDescriptionModal.bind(this);
        this.handleShowMapModal = this.handleShowMapModal.bind(this);
        this.handleCloseMapModal = this.handleCloseMapModal.bind(this);

    }

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

    render() {
        let position = '';
        if (this.props.position % 2 === 0) {
            position = 'left'
        } else {
            position = 'right'
        }

        let iconImage = '';
        if (this.props.activity.location.category === 'nightlife') {
            iconImage = nightlife;
        }
        if (this.props.activity.location.category === 'food') {
            iconImage = dine;
        }
        if (this.props.activity.location.category === 'todos') {
            iconImage = todos;
        }
        if (this.props.activity.location.category === 'daytrip') {
            iconImage = dayTrip;
        }
        if (this.props.activity.location.category === 'topspot') {
            iconImage = topSpot;
        }
        console.log(iconImage);

        return (
            <div className="timeline-line">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={this.props.activity.location.startTime}
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                    icon={<img className="nightlife-icon" src={iconImage}></img>}
                    position={position}
                >

                    <div className="timeline-element-outer-container">
                        <a className="timeline-element-top-container">
                            <img src={this.props.activity.location.image} className="timeline-image" onClick={this.handleShowDescriptionModal}></img>
                            <h3 className="vertical-timeline-element-title">{this.props.activity.location.name}</h3>
                        </a>
                        <DescriptionModal show={this.state.showDescriptionModal} onHide={this.handleCloseDescriptionModal} handleClose={this.handleCloseDescriptionModal} />
                        <div className="timeline-information">
                            <div className="time"><span className="duration">Visit Duration:</span> {this.props.activity.location.duration} hr</div>
                            <div className="timeline-description">
                                {this.props.activity.location.description}
                            </div></div></div>

                    <div className="timeline-element-container">
                        <a className="timeline-open btn" onClick={this.handleShowTimeModal}>
                            <img className="timeline-clock" src={clock}></img>
                        </a>
                        <TimeModal className="time-modal" show={this.state.showTimeModal} onHide={this.handleCloseTimeModal} handleClose={this.handleCloseTimeModal} />
                        <a className="timeline-goto btn" onClick={this.handleShowMapModal}>
                            <img className="timeline-map" src={map}></img>
                        </a>
                        <MapModal show={this.state.showMapModal} onHide={this.handleCloseMapModal} handleClose={this.handleCloseMapModal} />
                        <a className="remove-container btn">
                            <img className="remove-image" src={xout}></img>
                        </a>
                    </div>
                </ VerticalTimelineElement>
            </div>
        )
    }
}

export default TimelineActivity;