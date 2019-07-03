import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import navArrow from '../../assets/images/white-down-arrow-png-2.png';

const ItineraryDropdown = (props) => {
    return (
        <div className="delete-itinerary-dropdown">
            <DropdownButton className="overall-dropdown"
                alignRight
                title={
                    <img className="timeline-arrow" src={navArrow}></img>
                }
                id="dropdown-menu-align-right"
            >
                <Dropdown.Item className="drop" eventKey="1">About Us</Dropdown.Item>
                <Dropdown.Item className="drop" eventKey="2">More Activities</Dropdown.Item>
                <Dropdown.Item className="drop" eventKey="3" href="./index.html">Book Another Trip</Dropdown.Item>
                <Dropdown.Item className="lastdrop" eventKey="4" onClick={props.handleDeleteItineraryClick}>Delete Itinerary</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default ItineraryDropdown;
