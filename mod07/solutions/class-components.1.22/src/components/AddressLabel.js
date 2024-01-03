import React from 'react';
import PropTypes from 'prop-types';
import './AddressLabel.css'

export default class AddressLabel extends React.Component  {

  render(){
    const { mailingLabel, className } = this.props;
    const { name, addressLine1, addressLine2 } = mailingLabel;

    return (
      <div className={`mailing-label ${className || ''}`}>
        <div className="name">{name}</div>
        <div className="addressLine1">{addressLine1}</div>
        <div className="addressLine2">{addressLine2}</div>
      </div>
    );
  }
        
}
AddressLabel.propTypes = {
    className: PropTypes.string,
    mailingLabel: PropTypes.shape({
      name: PropTypes.string.isRequired,
      addressLine1: PropTypes.string.isRequired,
      addressLine2: PropTypes.string.isRequired
    }).isRequired
};