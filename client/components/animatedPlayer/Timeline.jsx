import React from 'react';
import PropTypes from 'prop-types';

function Timeline({ length, elapsed }) {
  const width = `${(elapsed / length) * 100}%`;
  const animatedStyles = { width };
  return (
    <div id="timelineContainer">
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
