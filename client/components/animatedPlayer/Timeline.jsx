import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/player.css';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progressDotStyles: {} };
    this.showProgressDot = this.showProgressDot.bind(this);
    this.updateTimestamp = this.updateTimestamp.bind(this);
    this.hideProgressDot = this.hideProgressDot.bind(this);
  }

  showProgressDot() {
    this.setState({
      progressDotStyles: { visibility: 'visible' },
    });
  }

  updateTimestamp(e) {
    const { length, scrub } = this.props;
    const boundingRectangle = document.getElementsByClassName(styles.timelineContainer)[0].getBoundingClientRect();
    const leftTlineBound = boundingRectangle.left;
    const rightTlineBound = boundingRectangle.right;
    let clickLocation = e.clientX;
    if (clickLocation < 0) {
      clickLocation = 0;
    } else if (clickLocation > rightTlineBound) {
      clickLocation = rightTlineBound;
    }
    // To get the scrubLocation: Subtract the left bound from the click location
    // To get the totalWidth: Subtract the left bound from the right bound
    // Divide scrubLocation by totalWidth to geth the ratio of the total
    let newTimestamp = (clickLocation - leftTlineBound) / (rightTlineBound - leftTlineBound);
    // Multiply by the song length to get the new timestamp
    newTimestamp *= length;
    scrub(newTimestamp);
    this.showProgressDot(e);
  }

  hideProgressDot() {
    this.setState({ progressDotStyles: { visibility: 'hidden' } });
  }

  render() {
    const { length, elapsed } = this.props;
    const { progressDotStyles } = this.state;

    // Animated timeline styles
    // Divide elapsed by length to get the progress ratio and multiply by 100%
    const width = `${(elapsed / length) * 100}%`;
    const animatedStyles = { width };

    return (
      <div
        className={styles.timelineContainer}
        onMouseOver={this.showProgressDot}
        onFocus={this.showProgressDot}
        onDrag={this.updateTimestamp}
        onMouseLeave={this.hideProgressDot}
        onClick={this.updateTimestamp}
        onKeyDown={this.updateTimestamp}
        role="button"
        tabIndex="-1"
        aria-label="song progress bar"
      >
        <div className={styles.timeline}>
          <div className={styles.animatedTimeline} style={animatedStyles}>
            <div className={styles.progressDot} style={progressDotStyles} />
          </div>
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
