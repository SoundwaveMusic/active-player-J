/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

function Pause({ pauseSong }) {
  return (
    <span>
      <button type="button" id="pause" className="button" onClick={pauseSong} />
    </span>
  );
}

Pause.propTypes = {
  pauseSong: PropTypes.func.isRequired,
};

export default Pause;
