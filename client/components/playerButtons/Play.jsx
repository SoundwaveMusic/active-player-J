import React from 'react';
import PropTypes from 'prop-types';

function Play({ playSong }) {
  return (
    <span>
      <button
        type="button"
        className="play button"
        onClick={playSong}
        aria-label="play"
      />
    </span>
  );
}

Play.propTypes = {
  playSong: PropTypes.func.isRequired,
};

export default Play;
