import React from 'react';
import PropTypes from 'prop-types';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressDotStyles: {} };
    this.getProgressDotLocation = this.getProgressDotLocation.bind(this);
    this.getNewTimestamp = this.getNewTimestamp.bind(this);
  }

  getNewTimestamp(e) {
    const { length, scrub } = this.props;
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
  }

  getProgressDotLocation(e) {
    console.log('getting location...');
    const { length, elapsed } = this.props;
    const leftTlineBound = e.target.getBoundingClientRect().left;
    const rightTlineBound = e.target.getBoundingClientRect().right;
    // To get the totalWidth: Subtract the left bound from the right bound
    // Divide elapsed by length to geth the ratio of the total
    // Multiply by element length to get the horizontal location of the progress dot
    const progressDotLocation = (elapsed / length) * (rightTlineBound - leftTlineBound);
    console.log('location ', progressDotLocation);
    this.setState({
      progressDotStyles: { visibility: 'visible', left: `${progressDotLocation}px` },
    });
  }

  resetState() {
    this.setState({ progressDotStyles: {} });
  }

  render () {
    const { length, elapsed } = this.props;
    const { progressDotStyles } = this.state;

    // Divide elapsed by length to get the progress ratio and multiply by 100%
    const width = `${(elapsed / length) * 100}%`;
    const animatedStyles = { width };

    return (
      <div
         id="timelineContainer"
        onMouseEnter={this.getProgressDotLocation}
        onFocus={this.getProgressDotLocation}
        onMouseLeave={() => this.setState({})}
        onClick={this.getNewTimestamp}
        onKeyDown={this.getNewTimestamp}
        role="button"
        tabIndex="-1"
        aria-label="song progress bar"
      >
        <div id="timeline">
          <div id="animatedTimeline" style={animatedStyles} />
          <div id="progressDot" style={progressDotStyles} />
        </div>
      </div>
    );
  }
}

Timeline.propTypes = {
  length: PropTypes.number.isRequired,
  elapsed: PropTypes.number.isRequired,
  scrub: PropTypes.func.isRequired,
};

export default Timeline;
