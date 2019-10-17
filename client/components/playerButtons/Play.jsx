import React from 'react';
import PropTypes from 'prop-types';

function Play({ playSong }) {
  return (
    <span>
      <button
        type="button"
        id="play"
        className="button"
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
