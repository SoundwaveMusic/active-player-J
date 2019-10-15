/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ id }) {
  return (
    <div>
      <button type="button" id={id} className="button" onClick={() => alert(`Clicked ${id}!`)} />
    </div>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Button;
