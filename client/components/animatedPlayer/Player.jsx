import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';
import Remaining from './LengthRemainingToggle';

function Player({ songFile }) {
  return (
    <div id="player">
      <CurrentTime elapsed={songFile.currentTime} />
      <Timeline />
      <Remaining length={songFile.duration} />
    </div>
  );
}

Player.propTypes = {
  songFile: PropTypes.shape({
    currentTime: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
};

Player.defaultProps = {
  songFile: { currentTime: 0, duration: 0 },
};

export default Player;
