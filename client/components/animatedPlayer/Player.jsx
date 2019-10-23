import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';
import Remaining from './LengthRemainingToggle';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrubbing: false, scrubTimestampLocation: 0 };
    this.startScrubbing = this.startScrubbing.bind(this);
    this.endScrubbing = this.endScrubbing.bind(this);
    this.scrubTimeline = this.scrubTimeline.bind(this);
  }

  startScrubbing() {this.setState( { isScrubbing: true })}

  endScrubbing() {this.setState( {isScrubbing: false })}

  scrubTimeline(scrubTimestampLocation) { 
    const { isScrubbing } = this.state;
    if(isScrubbing) {
      this.setState({ scrubTimestampLocation });
    }
  }
  
  render() {
    const { length, timestamp, scrub } = this.props;
    const { isScrubbing, scrubTimestampLocation } = this.state;
    const timelineTimestamp = (isScrubbing) ? scrubTimestampLocation : timestamp;
    
    return (
      <div>
        <CurrentTime elapsed={timelineTimestamp} />
        <Timeline
          length={length}
          elapsed={timelineTimestamp}
          scrub={scrub}
          startScrubbing={this.startScrubbing}
          endScrubbing={this.endScrubbing}
          scrubTimeline={this.scrubTimeline}
        />
        <Remaining length={length} elapsed={timelineTimestamp} />
      </div>
    );
  }
}

Player.propTypes = {
  length: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
  scrub: PropTypes.func.isRequired,
};

export default Player;
