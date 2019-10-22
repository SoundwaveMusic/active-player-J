import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/button.css';

function Button({ className, clickHandler }) {
  
  return (
    <span>
      <button
        type="button"
        className={styles[className]}
        onClick={clickHandler}
        aria-label={className}
      />
    </span>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
