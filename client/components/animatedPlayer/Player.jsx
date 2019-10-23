import React from 'react';
import PropTypes from 'prop-types';
import CurrentTime from './CurrentTime';
import Timeline from './Timeline';
import Remaining from './LengthRemainingToggle';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrubbing: false };
    this.startScrubbing = this.startScrubbing.bind(this);
    this.endScrubbing = this.endScrubbing.bind(this);
    this.scrubTimeline = this.scrubTimeline.bind(this);
  }

  startScrubbing() {this.setState( { isScrubbing: true })}

  endScrubbing() {this.setState( {isScrubbing: false })}

  scrubTimeline(test) { 
    const { isScrubbing } = this.state;
    if(isScrubbing) {
      console.log(test);
    }
  }
  
  render() {
    const { length, timestamp, scrub } = this.props
    console.log('State is scrubbing: ', this.state.isScrubbing);
    return (
      <div>
        <CurrentTime elapsed={timestamp} />
        <Timeline
          length={length}
          elapsed={timestamp}
          scrub={scrub}
          startScrubbing={this.startScrubbing}
          endScrubbing={this.endScrubbing}
          scrubTimeline={this.scrubTimeline}
        />
        <Remaining length={length} elapsed={timestamp} />
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
