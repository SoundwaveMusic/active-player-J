import React from 'react';
import PropTypes from 'prop-types';

function Button({ id }) {
  return (
    <span>
      <button
        type="button"
        id={id}
        className="button"
        onClick={() => alert(`Clicked ${id}!`)}
        aria-label={id}
      />
    </span>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Button;
