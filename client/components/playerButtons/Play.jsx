import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/button.css';

function Play({ playSong }) {
  return (
    <span>
      <button
        type="button"
        className={styles.play}
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
