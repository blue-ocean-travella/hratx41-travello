import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getOpen = (bool) => {
    let open = '';

    if (bool === true) {
        open = 'Currently Open';
        // var change = open.fontcolor('green');
        // document.getElementById("#open").innerHTML = change;
    } else {
        open = 'Currently Closed';
        // let target = document.getElementById("time-modal-open");
        // console.log(target);

    }
    return open;
}

const getColor = (bool) => {
    let color = '';

    if (bool === true) {
        color = 'green';
    } else {
        color = 'red';
    }
    return color;
}

const TimeModal = (props) => {

    let color = getColor(props.activity.open);

    // console.log('TimeModal props: ', props)
    return (
        <Modal show={props.show} onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">{props.activity.name}
                    <div className="time-modal-hours">Hours of Operation:</div>
                    <div id="time-modal-open" style={color = { color }}>{getOpen(props.activity.open)}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={4}>Sunday:</Col>
                        <Col className="modal-time">{props.activity.hoursOfOperation.sunday}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Monday:</Col>
                        <Col className="modal-time">{props.activity.hoursOfOperation.monday}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Tuesday:</Col>
                        <Col className="modal-time">{props.activity.hoursOfOperation.tuesday}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Wednesday:</Col>
                        <Col className="modal-time">{props.activity.hoursOfOperation.wednesday}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Thursday:</Col>
                        <Col className="modal-time">{props.activity.hoursOfOperation.thursday}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Friday</Col>
                        <Col className="modal-time">{props.activity.hoursOfOperation.friday}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Saturday:</Col>
                        <Col className="modal-time">{props.activity.hoursOfOperation.saturday}</Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};


export default TimeModal;