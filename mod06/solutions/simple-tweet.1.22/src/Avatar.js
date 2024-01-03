import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar(props) {
    const {gender, id} = props;
    let url = `https://randomuser.me/api/portraits/thumb/${gender}/${id}.jpg`;
    return (
      <img src={url} className="avatar" alt="avatar"/>
    );
}

Avatar.defaultProps = {
    gender: 'men',
    id: 1
}

Avatar.propTypes = {
    gender: PropTypes.oneOf(['men', 'women']),
    id: PropTypes.number
}
