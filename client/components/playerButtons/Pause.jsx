/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

function Pause({ pauseSong }) {
  return (
    <div>
      <button type="button" id="pause" className="button" onClick={pauseSong} />
    </div>
  );
}

Pause.propTypes = {
  pauseSong: PropTypes.func.isRequired,
};

export default Pause;
