import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const apiKey = process.env.API_KEY;

const MapModal = (props) => {
    let latitude = props.activity.location.latitude;
    let longitude = props.activity.location.longitude
    // console.log('MapModal props: ', props)
    return (
        <Modal show={props.show} onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">{props.activity.location.name}<div className="modal-map">Map</div></Modal.Title>
            </Modal.Header>
            <Modal.Body className="map-modal-body">
                <LoadScript
                    id="timeline-map-script-loader"
                    googleMapsApiKey={apiKey}
                >

                    <GoogleMap
                        id='timeline-modal-map'
                        mapContainerStyle={{
                            height: '400px',
                            width: '500px'
                        }}
                        zoom={16}
                        center={{
                            lat: latitude,
                            lng: longitude
                        }}
                    />
                </LoadScript>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


export default MapModal;