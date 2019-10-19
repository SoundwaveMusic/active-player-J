import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';
import Remaining from './LengthRemainingToggle';

function Player({ length, timestamp }) {
  return (
    <div>
      <CurrentTime elapsed={timestamp} />
      <Timeline length={length} elapsed={timestamp} />
      <Remaining length={length} elapsed={timestamp} />
    </div>
  );
}

Player.propTypes = {
  length: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Player;
