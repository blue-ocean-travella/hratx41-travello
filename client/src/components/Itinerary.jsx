import React from 'react';
import Axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import TimelineActivity from './TimelineActivity.jsx';

import ItineraryDropdown from './ItineraryDropdown.jsx';

// images

import logo from '../../assets/images/travella.png';
import finishLine from '../../assets/images/finishline.png';

class Itinerary extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
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
            username: 'Lucy',
            uuid: 1,
            activities: [{
                name: 'Eiffel Tower',
                duration: 1,
                description: 'This is a description of whatever item is located to the left.  This will be lorem ipsum until we can get the actual description from our APi.  I have to keep typing to make this really long so I can style my containers and make sure that the overflow is handled correctly.  That is so much funnnnnnnnnnnn!',
                startTime: '2:00 PM',
                category: 'topSpots',
                hoursOfOperation: {
                    sunday: '12:00 PM - 5:00 PM',
                    monday: '8:00 AM - 10:00 PM',
                    tuesday: '8:00 AM - 10:00 PM',
                    wednesday: '8:00 AM - 11:00 PM',
                    thursday: '8:00 AM - 11:00 PM',
                    friday: '8:00 AM - 12:00 AM',
                    saturday: '8:00 AM - 12:00 AM',
                },
                longitude: 2.2945,
                latitude: 48.8584,
                numberOfReviews: 175,
                rating: 4,
                open: true,
                address: '119 Nueces St., Austin, TX 78741',
                phone: '555-555-5555',
                website: 'http://www.eiffeltower.com',
                images: ['https://img.jakpost.net/c/2017/02/10/2017_02_10_21340_1486708892._large.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
            },
            {
                name: 'Sensoji Temple',
                duration: 3,
                description: 'lorem ipsum',
                startTime: '7:00 PM',
                category: 'thingsToDo',
                hoursOfOperation: {
                    sunday: '12:00 PM - 5:00 PM',
                    monday: '8:00 AM - 10:00 PM',
                    tuesday: '8:00 AM - 10:00 PM',
                    wednesday: '8:00 AM - 11:00 PM',
                    thursday: '8:00 AM - 11:00 PM',
                    friday: '8:00 AM - 12:00 AM',
                    saturday: '8:00 AM - 12:00 AM',
                },
                longitude: 139.796783,
                latitude: 35.714661,
                numberOfReviews: 4000,
                rating: 3.5,
                open: true,
                address: '119 Nueces St., Austin, TX 78741',
                phone: '555-555-5555',
                website: 'http://www.sensojitemple.com',
                images: ['https://www.touropia.com/gfx/d/tourist-attractions-in-tokyo/sensoji_temple.jpg?v=29a16b16edae6dc242531c1dd1fb3188', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
            },
            {
                name: 'Barton Springs',
                duration: 2,
                description: 'lorem ipsum',
                startTime: '4:00 PM',
                category: 'nightLife',
                hoursOfOperation: {
                    sunday: '12:00 PM - 5:00 PM',
                    monday: '8:00 AM - 10:00 PM',
                    tuesday: '8:00 AM - 10:00 PM',
                    wednesday: '8:00 AM - 11:00 PM',
                    thursday: '8:00 AM - 11:00 PM',
                    friday: '8:00 AM - 12:00 AM',
                    saturday: '8:00 AM - 12:00 AM',
                },
                longitude: -97.7729,
                latitude: 30.2670,
                numberOfReviews: 40,
                rating: 5,
                open: false,
                address: '119 Nueces St., Austin, TX 78741',
                phone: '555-555-5555',
                website: 'http://www.bartonsprings.com',
                images: ['https://ak6.picdn.net/shutterstock/videos/1021179886/thumb/1.jpg', 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://cdn2.eyeem.com/thumb/30a522b99399660cfd8fc8dc79ca07f8d909bc8c-1533716330320/w/800']
            }
            ],
        };

        this.handleDeleteItineraryClick = this.handleDeleteItineraryClick.bind(this);
        this.getRandomElement = this.getRandomElement.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    handleDeleteItineraryClick(event) {
        event.preventDefault();
        console.log('delete entire itinerary');
        // let city = this.state.city;

        // Axios.delete('/itineraries', {
        //     params: {
        //         city: city
        //     }
        // })
        //     .then((response) => {
        //         console.log('successfully deleted current itinerary: ', response)
        //     })
        //     .catch((error) => {
        //         console.log('error deleting current inventory: ', error)
        //     })
    }


    componentDidMount() {
        // let uuid = (this.state.uuid);
        Axios.get('/itineraries', { params: { uuid: 1 } })
            .then((response) => {
                console.log('front end response: ', response.data);
                this.setState({
                    activities: response.data
                })
            })
            .catch((error) => {
                console.log('client side error retrieving itinerary: ', error)
            })

        this.setState({
            backgroundImage: this.getImage(),
        });
    }

    // background image functions

    getImage() {
        const randomImage = this.state.backgroundImages[this.getRandomElement(this.state.backgroundImages)];
        return randomImage;
    }

    getRandomElement(array) {
        let random = Math.floor(Math.random() * array.length);
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
                        {this.state.activities.map((activity, i) => <TimelineActivity
                            key={i}
                            position={i}
                            activity={activity}
                        />)}



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