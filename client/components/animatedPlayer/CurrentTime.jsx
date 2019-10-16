import React from 'react';
import PropTypes from 'prop-types';
import getTime from './getTime';

function CurrentTime({ elapsed }) {
  const time = getTime(elapsed);

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
