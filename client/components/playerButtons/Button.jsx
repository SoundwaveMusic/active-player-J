import React from 'react';
import PropTypes from 'prop-types';

function Button({ id, clickHandler }) {
  return (
    <span>
      <button
        type="button"
        id={id}
        className="button"
        onClick={clickHandler}
        aria-label={id}
      />
    </span>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
