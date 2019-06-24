import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import austin from '../assets/images/Austin-Skyline-Sunset-Aerial-Drone-Photo.jpg';
import clock from '../assets/images/white-clock3.png';
import arrow from '../assets/images/up-arrow.jpg'
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
                <img src='http://retailsolutionsre.com/wp-content/uploads/2017/01/Austin-Skyline.jpg' id="bg-img"></img>
                <VerticalTimeline className="opaque">
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
                            <div className="timeline-open">Open</div>
                            <div className="timeline-goto">Go To</div>
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
                            <div className="timeline-open">Open</div>
                            <div className="timeline-goto">Go To</div>
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
                                <img className="up-arrow" src={arrow}></img>
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
                            <div className="timeline-open">Open</div>
                            <div className="timeline-goto">Go To</div>
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
                            <div className="timeline-open">Open</div>
                            <div className="timeline-goto">Go To</div>
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
                            <div className="timeline-open">Open</div>
                            <div className="timeline-goto">Go To</div>
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
                            <div className="timeline-open">Open</div>
                            <div className="timeline-goto">Go To</div>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}

                    />
                </VerticalTimeline>
            </div >
        )
    }
}

export default Itinerary;