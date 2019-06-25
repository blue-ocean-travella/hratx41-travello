import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const apiKey =
// process.env.API_KEY

const MapModal = (props) => {
    // console.log('MapModal props: ', props)
    return (
        <Modal show={props.show} onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">Location Name<div className="modal-map">Map</div></Modal.Title>
            </Modal.Header>
            <Modal.Body className="map-modal-body">
                <LoadScript
                    id="timeline-map-script-loader"
                // googleMapsApiKey=
                >

                    <GoogleMap
                        id='timeline-modal-map'
                        mapContainerStyle={{
                            height: '400px',
                            width: '500px'
                        }}
                        zoom={16}
                        center={{
                            lat: 30.265824,
                            lng: -97.74926
                        }}
                    />
                </LoadScript>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}


export default MapModal;