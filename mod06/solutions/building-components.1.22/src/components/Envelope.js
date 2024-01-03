import React from 'react';
import PropTypes from 'prop-types';

import AddressLabel from './AddressLabel';
import Stamp from './Stamp';

import './Envelope.css';


export default function Envelope(props) {
  const { toPerson, fromPerson } = props;
  return (
    <div className="envelope">
      <AddressLabel
        className="from-label"
        mailingLabel={fromPerson}
      />
      <AddressLabel className="to-label" mailingLabel={toPerson} />
      <Stamp />
    </div>
  );
}
Envelope.propTypes = {
  toPerson: PropTypes.object.isRequired,
  fromPerson: PropTypes.object.isRequired
};

