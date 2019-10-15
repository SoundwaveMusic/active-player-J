/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

function Play({ playSong }) {
  return (
    <div>
      <button type="button" id="play" className="button" onClick={playSong} />
    </div>
  );
}

Play.propTypes = {
  playSong: PropTypes.func.isRequired,
};

export default Play;
