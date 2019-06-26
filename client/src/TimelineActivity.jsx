import React from 'react';


const TimelineActivity = (props) => {
    console.log(props);
    return (
        <div>
            className="vertical-timeline-element--work"
            date="8:00 AM"
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={<img className="nightlife-icon" src={nightlife}></img>}
        </div>
    )
}

export default TimelineActivity;