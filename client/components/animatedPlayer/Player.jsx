import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';

function Player({ songFile }) {
  return (
    <div id="player">
      <CurrentTime elapsed={songFile.currentTime} />
      <Timeline/>
    </div>
  );
}

Player.propTypes = {
  songFile: PropTypes.shape({
    currentTime: PropTypes.number.isRequired,
  }),
};

Player.defaultProps = {
  songFile: { currentTime: 0 },
};

export default Player;
