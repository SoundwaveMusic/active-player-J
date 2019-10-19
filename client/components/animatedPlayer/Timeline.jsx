import React from 'react';
import PropTypes from 'prop-types';

function Timeline({ length, elapsed, scrub }) {
  // Divide elapsed by length to get the progress ratio and multiply by 100%
  const width = `${(elapsed / length) * 100}%`;
  const animatedStyles = { width };

  const getNewTimestamp = (e) => {
    const leftTlineBound = e.target.getBoundingClientRect().left;
    const rightTlineBound = e.target.getBoundingClientRect().right;
    const clickLocation = e.clientX;
    // To get the scrubLocation: Subtract the left bound from the click location
    // To get the totalWidth: Subtract the left bound from the right bound
    // Divide scrubLocation by totalWidth to geth the ratio of the total
    let newTimestamp = ((clickLocation - leftTlineBound) / (rightTlineBound - leftTlineBound));
    // Multiply by the song length to get the new timestamp
    newTimestamp *= length;
    scrub(newTimestamp);
  };

  return (
    <div
      id="timelineContainer"
      onClick={getNewTimestamp}
      onKeyDown={getNewTimestamp}
      role="button"
      tabIndex="-1"
      aria-label="song progress bar"
    >
      <div id="timeline">
        <div className="animatedTimeline" style={animatedStyles} />
      </div>
    </div>
  );
}

Timeline.propTypes = {
  length: PropTypes.number.isRequired,
  elapsed: PropTypes.number.isRequired,
  scrub: PropTypes.func.isRequired,
};

export default Timeline;
