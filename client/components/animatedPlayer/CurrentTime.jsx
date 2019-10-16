import React from 'react';
import PropTypes from 'prop-types';

function CurrentTime({ elapsed }) {
  const min = Math.floor(elapsed / 60);
  const sec = Math.floor(elapsed % 60);
  const zeroPaddedSec = (sec < 10) ? `0${sec}` : sec;
  const time = `${min}:${zeroPaddedSec}`;

  return (
    <div className="timeBox">
      <span id="currentTime">{time}</span>
    </div>
  );
}

CurrentTime.propTypes = {
  elapsed: PropTypes.number.isRequired,
};

export default CurrentTime;
