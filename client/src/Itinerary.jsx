import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import austin from '../assets/images/austin.jpg';
import clock from '../assets/images/clock.jpg';
import arrow from '../assets/images/globe.jpg'
import logo from '../assets/images/16a60b31-4a4b-41eb-9cf2-b6f71c4a83e5_200x200.png'
import navArrow from '../assets/images/white-down-arrow-png-2.png';
import martini from '../assets/images/martini.png';
import map from '../assets/images/directions.png';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container'



class Itinerary extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }

    render() {
        return (
            < div className="page-wrapper">
                <div id="timeline-header">
                    <img className="timeline-logo" src={logo}></img>
                    <h1 className="headline-itinerary">Your Itinerary</h1>
                    <img className="timeline-arrow" src={navArrow}></img>
                </div>
                <img src='https://static1.squarespace.com/static/54c1f4dbe4b01ba65f531399/5ba8f1ac1905f4766789d9d6/5ba94b20c830252b2646bd22/1537821501094/Austin-Skyline-Sunset-Aerial-Drone-Photo.jpg?format=750w' id="bg-img"></img>
                <VerticalTimeline className="timeline-line">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img className="nightlife-icon" src={martini}></img>}


                    >
                        <div className="timeline-element-outer-container">
                            <div className="timeline-element-top-container">
                                <img src={austin} className="timeline-image"></img>
                                <h3 className="vertical-timeline-element-title">Barton Springs</h3>
                            </div>
                            <div className="timeline-information">
                                <div className="time"><span className="duration">Visit Duration:</span> 1 hr</div>
                                <div className="timeline-description">
                                    Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.  This is a really long description to see if overflow works.
            </div></div></div>
                        <div className="timeline-element-container">
                            <div className="timeline-open btn">
                                <img className="timeline-clock" src={clock}></img>
                            </div>
                            <div className="timeline-goto btn">
                                <img className="timeline-map" src={map}></img>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img className="nightlife-icon" src={martini}></img>}


                    >
                        <div className="timeline-element-outer-container">
                            <div className="timeline-element-top-container">
                                <img src={austin} className="timeline-image"></img>
                                <h3 className="vertical-timeline-element-title">Barton Springs</h3>
                            </div>
                            <div className="timeline-information">
                                <div className="time"><span className="duration">Visit Duration:</span> 1 hr</div>
                                <div className="timeline-description">
                                    Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.  This is a really long description to see if overflow works.
            </div></div></div>
                        <div className="timeline-element-container">
                            <div className="timeline-open btn">
                                <img className="timeline-clock" src={clock}></img>
                            </div>
                            <div className="timeline-goto btn">
                                <img className="timeline-map" src={map}></img>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img className="nightlife-icon" src={martini}></img>}


                    >
                        <div className="timeline-element-outer-container">
                            <div className="timeline-element-top-container">
                                <img src={austin} className="timeline-image"></img>
                                <h3 className="vertical-timeline-element-title">Barton Springs</h3>
                            </div>
                            <div className="timeline-information">
                                <div className="time"><span className="duration">Visit Duration:</span> 1 hr</div>
                                <div className="timeline-description">
                                    Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.  This is a really long description to see if overflow works.
            </div></div></div>
                        <div className="timeline-element-container">
                            <div className="timeline-open btn">
                                <img className="timeline-clock" src={clock}></img>
                            </div>
                            <div className="timeline-goto btn">
                                <img className="timeline-map" src={map}></img>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}


                    >
                        <div className="timeline-element-top-container">
                            <img src={austin} className="timeline-image"></img>
                            <h3 className="vertical-timeline-element-title">Location: Barton Springs</h3>
                            <h4 className="vertical-timeline-element-subtitle">Visit Duration: 1 hr</h4>
                            <div className="timeline-description">
                                Description: Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.
    </div></div>
                        <div className="timeline-element-container">
                            <div className="timeline-open">
                                <img className="timeline-clock" src={clock}></img>
                            </div>
                            <div className="timeline-goto">
                                Directions
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}


                    >
                        <div className="timeline-element-top-container">
                            <img src={austin} className="timeline-image"></img>
                            <h3 className="vertical-timeline-element-title">Location: Barton Springs</h3>
                            <h4 className="vertical-timeline-element-subtitle">Visit Duration: 1 hr</h4>
                            <div className="timeline-description">
                                Description: Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.
    </div></div>
                        <div className="timeline-element-container">
                            <div className="timeline-open">
                                <img className="timeline-clock" src={clock}></img>
                            </div>
                            <div className="timeline-goto">
                                Directions
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}


                    >
                        <div className="timeline-element-top-container">
                            <img src={austin} className="timeline-image"></img>
                            <h3 className="vertical-timeline-element-title">Location: Barton Springs</h3>
                            <h4 className="vertical-timeline-element-subtitle">Visit Duration: 1 hr</h4>
                            <div className="timeline-description">
                                Description: Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.
    </div></div>
                        <div className="timeline-element-container">
                            <div className="timeline-open">
                                <img className="timeline-clock" src={clock}></img>
                            </div>
                            <div className="timeline-goto">
                                Directions
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}


                    >
                        <div className="timeline-element-top-container">
                            <img src={austin} className="timeline-image"></img>
                            <h3 className="vertical-timeline-element-title">Location: Barton Springs</h3>
                            <h4 className="vertical-timeline-element-subtitle">Visit Duration: 1 hr</h4>
                            <div className="timeline-description">
                                Description: Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.
    </div></div>
                        <div className="timeline-element-container">
                            <div className="timeline-open">
                                <img className="timeline-clock" src={clock}></img>
                            </div>
                            <div className="timeline-goto">
                                Directions
                            </div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}

                    />
                </VerticalTimeline >
            </div >
        )
    }
}

export default Itinerary;