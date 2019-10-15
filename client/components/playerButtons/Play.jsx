/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

function Play({ playSong }) {
  return (
    <span>
      <button type="button" id="play" className="button" onClick={playSong} />
    </span>
  );
}

Play.propTypes = {
  playSong: PropTypes.func.isRequired,
};

export default Play;
