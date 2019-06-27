import React from 'react';
import Axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimelineActivity from './TimelineActivity.jsx';
// import DescriptionModal from './DescriptionModal.jsx';
// import TimeModal from './TimeModal.jsx';
// import MapModal from './MapModal.jsx';
import ItineraryDropdown from './ItineraryDropdown.jsx';

// images

// import clock from '../assets/images/clock.jpg';
import logo from '../../assets/images/16a60b31-4a4b-41eb-9cf2-b6f71c4a83e5_200x200.png'
// import nightlife from '../assets/images/martini.png';
// import map from '../assets/images/directions.png';
// import dine from '../assets/images/food.png';
// import todos from '../assets/images/thingstodo.png';
// import topSpot from '../assets/images/topspot.png';
// import dayTrip from '../assets/images/daytrip2.png';
// import xout from '../assets/images/xout.png';
import finishLine from '../../assets/images/finishline.png';
// import navArrow from '../assets/images/white-down-arrow-png-2.png';


// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container'



class Itinerary extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            // showDescriptionModal: false,
            // showTimeModal: false,
            // showMapModal: false,
            backgroundImages: [
                'https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/images/hero_media_image/2017-05/23b0b0b9caaa07ee409b693da9bf9003.jpeg?itok=pE5ss3vx',
                'https://media.webjet.com.au/Images/cities/1200x472/TYO1.jpg',
                'https://cdn.cnn.com/cnnnext/dam/assets/160330153344-09-japan-temples.jpg',
                'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/attractions/petronas-twin-tower/pagePropertiesImage/petronas-twin-towers.jpg',
                'http://images6.fanpop.com/image/photos/40600000/brooklyn-bridge-at-night-2-wallpaper-1600x900-beautiful-things-40673686-1600-900.jpg',
                'https://guardian.ng/wp-content/uploads/2018/02/zakynthos-ionian-islands-greece-GREEKISLES1216-e1518079555875-1062x598.jpg',
                'https://www.tripsavvy.com/thmb/eqIUoqQykjoDq0sCKQVY7XccPkk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/37705096385_a5722ec534_k-5b50265246e0fb003780ab4c.jpg',
                'https://www.thevintagenews.com/wp-content/uploads/2019/04/hagia-sophia-picture-id670401080.jpg',
                'https://thumbs-prod.si-cdn.com/bgEOL54kwN1Z_WnpkM53u-e84WE=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/93/82/93822a87-82eb-4a9f-97a6-3ad5ec8d7e56/gettyimages-961271800.jpg',
                'https://www.rd.com/wp-content/uploads/2017/11/This-Stunning-Town-in-the-Swiss-Alps-Will-Pay-You-25000-to-Move-There_252539665_ansharphoto-1024x683.jpg',
                'https://photos.smugmug.com/Landscapes/TexasCities-1/Austin-Texas/i-4CBpj3p/0/fc1d0e57/L/austin-skyline-from-boardwalk-feb-2015-final%20%281%20of%201%29-L.jpg',
                'https://dw8stlw9qt0iz.cloudfront.net/4eZetbLz3y692SMnzrlnVPFWUTU=/750x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/thumbnail/standard/9d70d226-6dce-4f77-f6a6-d457a54230b1.png',
                'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200',
                'https://s3.amazonaws.com/trip-brief-production/tip_photos/photos/000/000/762/display/victoria-falls-Victoria-Falls-international-arrivals-continue-to-soar-800x400-d22460f33d.jpg?1542748371',
                'https://img.theculturetrip.com/x/smart/wp-content/uploads/2017/03/table-mountain-1995966_1280.jpg',
                'https://atmosair.com/wp-content/uploads/2018/07/top-destination-bangkok.jpg',
                'https://cdn.civitatis.com/reino-unido/londres/galeria/london-eye-atardecer.jpg',
                'http://www.talkativeman.com/img/Enormous_Christ_the_Redeemer_Statue_in_Rio_de_Janeiro.jpg',
                'https://www.jetsetter.com/uploads/sites/7/2019/03/bobmd-bungalow-2973-hor-clsc-1160x690.jpg'
            ],
            backgroundImage: '',
            city: 'Paris',
            itineraryItems: [{
                uuid: 1,
                location:
                {
                    name: 'Eiffel Tower',
                    duration: 1,
                    description: 'lorem ipsum',
                    startTime: '2:00 PM',
                    category: 'topSpots',
                    hoursOfOperation: 'big string',
                    longitude: 2.2945,
                    latitude: 48.8584,
                    reviews: 175,
                    stars: 4,
                    address: '119 Nueces St., Austin, TX 78741',
                    phone: '555-555-5555',
                    image: 'https://img.jakpost.net/c/2017/02/10/2017_02_10_21340_1486708892._large.jpg'
                }
            }, {
                uuid: 2,
                location:
                {
                    name: 'Sensoji Temple',
                    duration: 3,
                    description: 'lorem ipsum',
                    startTime: '7:00 PM',
                    category: 'thingsToDo',
                    hoursOfOperation: 'big string',
                    longitude: 139.796783,
                    latitude: 35.714661,
                    reviews: 4000,
                    stars: 3.5,
                    address: '119 Nueces St., Austin, TX 78741',
                    phone: '555-555-5555',
                    image: 'https://www.touropia.com/gfx/d/tourist-attractions-in-tokyo/sensoji_temple.jpg?v=29a16b16edae6dc242531c1dd1fb3188'
                }
            }, {
                uuid: 3,
                location:
                {
                    name: 'Barton Springs',
                    duration: 2,
                    description: 'lorem ipsum',
                    startTime: '4:00 PM',
                    category: 'nightLife',
                    hoursOfOperation: 'big string',
                    longitude: -97.7729,
                    latitude: 30.2670,
                    reviews: 40,
                    stars: 5,
                    address: '119 Nueces St., Austin, TX 78741',
                    phone: '555-555-5555',
                    image: 'https://ak6.picdn.net/shutterstock/videos/1021179886/thumb/1.jpg'
                }
            }],
        }

        // this.handleArrowClick = this.handleArrowClick.bind(this);
        // this.handleShowTimeModal = this.handleShowTimeModal.bind(this);
        // this.handleCloseTimeModal = this.handleCloseTimeModal.bind(this);
        // this.handleShowDescriptionModal = this.handleShowDescriptionModal.bind(this);
        // this.handleCloseDescriptionModal = this.handleCloseDescriptionModal.bind(this);
        // this.handleShowMapModal = this.handleShowMapModal.bind(this);
        // this.handleCloseMapModal = this.handleCloseMapModal.bind(this);
        this.handleDeleteItineraryClick = this.handleDeleteItineraryClick.bind(this);
        this.getRandomElement = this.getRandomElement.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    handleDeleteItineraryClick(event) {
        event.preventDefault()
        console.log('delete entire itinerary');
        // let city = this.state.city;

        //     Axios.delete('/itineraries', {
        //         params: {
        //             city: city
        //         }
        //     })
        //         .then((response) => {
        //             console.log('successfully deleted current itinerary: ', response)
        //         })
        //         .catch((error) => {
        //             console.log('error deleting current inventory: ', error)
        //         })
    }

    // handleArrowClick() {

    // }

    // handleShowDescriptionModal() {
    //     this.setState({ showDescriptionModal: true });
    // }

    // handleCloseDescriptionModal() {
    //     this.setState({ showDescriptionModal: false });
    // }

    // handleShowTimeModal() {
    //     this.setState({ showTimeModal: true });
    // }

    // handleCloseTimeModal() {
    //     this.setState({ showTimeModal: false });
    // }

    // handleShowMapModal() {
    //     this.setState({ showMapModal: true });
    // }

    // handleCloseMapModal() {
    //     this.setState({ showMapModal: false });
    // }


    componentDidMount() {
        let uuid = (this.state.uuid);
        this.setState({
            backgroundImage: this.getImage()
        })
        // Axios.get(`/itineraries?uuid=${uuid}`)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log('client side error retrieving itinerary: ', error)
        //     })
    }

    // background image functions

    getImage() {
        const randomImage = this.state.backgroundImages[this.getRandomElement(this.state.backgroundImages)];
        return randomImage;
    }

    getRandomElement(array) {
        let random = Math.floor(Math.random() * array.length)
        return random;
    }

    render() {
        return (
            <div>
                <img src={this.state.backgroundImage} id="bg-img"></img>
                < div className="page-wrapper">
                    <div id="timeline-header">
                        <img className="timeline-logo" src={logo}></img>
                        <h1 className="headline-itinerary">Your {this.state.city} Itinerary</h1>
                        {/* <img className="timeline-arrow" src={navArrow} /> */}
                        <ItineraryDropdown handleDeleteItineraryClick={this.handleDeleteItineraryClick} />
                    </div>

                    <VerticalTimeline className="timeline-line">
                        {this.state.itineraryItems.map((activity, i) => <TimelineActivity
                            key={i}
                            position={i}
                            activity={activity}
                        // handleShowDescriptionModal={this.handleShowDescriptionModal}
                        // handleCloseDescriptionModal={this.handleCloseDescriptionModal}
                        // handleShowTimeModal={this.handleShowTimeModal}
                        // handleCloseTimeModal={this.handleCloseTimeModal}
                        // handleShowMapModal={this.handleShowMapModal}
                        // handleCloseMapModal={this.handleCloseMapModal}
                        />)}
                        {/* <VerticalTimelineElement className="vertical-timeline-element--work"
                        date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                        icon={<img className="nightlife-icon" src={nightlife}></img>}>
                        {this.state.activities.map((activity, i) => <TimelineActivity key={i} activity={activity} />)}
                    </VerticalTimelineElement> */}

                        {/* <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="8:00 AM"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img className="nightlife-icon" src={nightlife}></img>}
                        >

                            <div className="timeline-element-outer-container">
                                <a className="timeline-element-top-container">
                                    <img src={austin} className="timeline-image" onClick={this.handleShowDescriptionModal}></img>
                                    <h3 className="vertical-timeline-element-title">Barton Springs</h3>
                                </a>
                                <DescriptionModal show={this.state.showDescriptionModal} onHide={this.handleCloseDescriptionModal} handleClose={this.handleCloseDescriptionModal} />
                                <div className="timeline-information">
                                    <div className="time"><span className="duration">Visit Duration:</span> 1 hr</div>
                                    <div className="timeline-description">
                                        Barton Springs is an outdoor public pool. What a great place to lay out, sip cocktails, and catch some sun.  This is a really long description to see if overflow works.
            </div></div></div>

                            <div className="timeline-element-container">
                                <a className="timeline-open btn" onClick={() => this.handleShowTimeModal()}>
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
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="8:00 AM"
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img className="nightlife-icon" src={dine}></img>}


                        >
                            <div className="timeline-element-outer-container">
                                <a className="timeline-element-top-container">
                                    <img src={austin} className="timeline-image"></img>
                                    <h3 className="vertical-timeline-element-title">Barton Springs</h3>
                                </a>
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
                            icon={<img className="nightlife-icon" src={todos}></img>}


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
                            icon={<img className="nightlife-icon" src={dayTrip}></img>}


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
                            icon={<img className="nightlife-icon" src={topSpot}></img>}


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
                            icon={<img className="nightlife-icon" src={dine}></img>}


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
                            icon={<img className="nightlife-icon" src={nightlife}></img>}


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
                        </VerticalTimelineElement> */}
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                            icon={<img className="nightlife-icon" src={finishLine}></img>}
                        />
                    </VerticalTimeline >
                    <div className="footer"></div>
                </div >
            </div>
        )
    }
}

export default Itinerary;