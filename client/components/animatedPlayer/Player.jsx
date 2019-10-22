import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';
import Remaining from './LengthRemainingToggle';

function Player({ length, timestamp, scrub }) {
  return (
    <div>
      <CurrentTime elapsed={timestamp} />
      <Timeline length={length} elapsed={timestamp} scrub={scrub} />
      <Remaining length={length} elapsed={timestamp} />
    </div>
  );
}

Player.propTypes = {
  length: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
  scrub: PropTypes.func.isRequired,
};

export default Player;
