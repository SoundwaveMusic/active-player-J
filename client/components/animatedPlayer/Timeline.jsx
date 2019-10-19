import React from 'react';
import PropTypes from 'prop-types';

function Timeline({ length, elapsed }) {
  const width = `${(elapsed / length) * 100}%`;
  const animatedStyles = { width };

  const getNewTimestamp = (e) => {
    // Get the right and left bounds of the timeline element, and click location
    // To get the scrubLocation: Subtract the left bound from the click location
    // To get the totalWidth: Subtract the left bound from the right bound
    // Divide scrubLocation by totalWidth to geth the ratio of the total
    // Multiply by the song length to get the new timestamp
    const leftTlineBound = e.target.getBoundingClientRect().left;
    const rightTlineBound = e.target.getBoundingClientRect().right;
    const clickLocation = e.clientX;
    const newTimestamp = ((clickLocation - leftTlineBound) / (rightTlineBound - leftTlineBound)) * length;
    console.log('new timestamp: ', newTimestamp);
    return newTimestamp;
  }
  return (
    <div id="timelineContainer" onClick={getNewTimestamp} >
      <div id="timeline">
        <div className="animatedTimeline" style={animatedStyles} />
      </div>
    </div>
  );
}

Timeline.propTypes = {
  length: PropTypes.number.isRequired,
  elapsed: PropTypes.number.isRequired,
};

export default Timeline;
