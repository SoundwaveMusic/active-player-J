import React from 'react';
import PropTypes from 'prop-types';
import getTime from './getTime';

function Remaining({ length }) {
  console.log(length);
  const time = getTime(length);

  return (
    <div className="timeBox">
      <span id="remaining">{time}</span>
    </div>
  );
}

Remaining.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Remaining;
