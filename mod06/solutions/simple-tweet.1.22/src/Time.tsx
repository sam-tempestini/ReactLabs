import React from 'react';
import moment from 'moment'; 
import PropTypes from 'prop-types';

export default function Time(props){
    const {time} = props;
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
}    

Time.defaultProps = {
    time: moment(new Date())
}

Time.propTypes = {
    time: PropTypes.string
}