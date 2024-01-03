import React from 'react';

export default function Message(props) {
    return (
        <div className="message">
            {props.text}
        </div>
    );
}
Message.defaultProps = {
    text: 'This is dummy text.'
}

Message.propTypes = {
    text: PropTypes.string
}