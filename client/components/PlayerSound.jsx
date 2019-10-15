/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

function PlayerSound({ songFile }) {
  return (
    <audio preload="auto" src={songFile} />
  );
}

PlayerSound.propTypes = {
  songFile: PropTypes.string.isRequired,
  // isPlaying: PropTypes.bool.isRequired,
};

export default PlayerSound;

// ref = "audio_tag"
