import React from 'react';
import PropTypes from 'prop-types';

function Player({ songFile }) {
  return (
    <div id="player">
      {songFile.currentTime}
    </div>
  );
}

// Received error:'songFile' is type object, but would need to use "shape" to pass the linter
Player.propTypes = {
  songFile: PropTypes.shape({
    currentTime: PropTypes.number.isRequired,
  }),
};

Player.defaultProps = {
  songFile: { currentTime: 0 },
};

export default Player;
