import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/button.css';

function Pause({ pauseSong }) {
  return (
    <span>
      <button
        type="button"
        className={styles.pause}
        onClick={pauseSong}
        aria-label="pause"
      />
    </span>
  );
}

Pause.propTypes = {
  pauseSong: PropTypes.func.isRequired,
};

export default Pause;
