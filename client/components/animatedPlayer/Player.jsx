import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';
import Remaining from './LengthRemainingToggle';

function Player({ songFile, length }) {
  return (
    <div id="player">
      <CurrentTime elapsed={songFile.currentTime} />
      <Timeline />
      <Remaining length={length} elapsed={songFile.currentTime} />
    </div>
  );
}

Player.propTypes = {
  songFile: PropTypes.shape({
    currentTime: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
  length: PropTypes.number.isRequired,
};

Player.defaultProps = {
  songFile: { currentTime: 0, duration: 0 },
};

export default Player;
