import React from 'react';
import PropTypes from 'prop-types';
import getTime from './getTime';
import styles from '../../cssModules/player.css';

function CurrentTime({ elapsed }) {
  const time = getTime(elapsed);

  return (
    <div className={styles.timeBox}>
      <span className={styles.currentTime}>{time}</span>
    </div>
  );
}

CurrentTime.propTypes = {
  elapsed: PropTypes.number.isRequired,
};

export default CurrentTime;
