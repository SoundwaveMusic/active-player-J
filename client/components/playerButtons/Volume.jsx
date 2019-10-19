import React from 'react';
import PropTypes from 'prop-types';

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: props.songFile.volume, isMuted: false };
  }

  muteToggle(e) {
    const { volume } = this.state; 
    const { songFile } = this.props;
    if (volume > 0) {
      songFile.volume = 0;
    } else {
      songFile.volume = volume;
    }
  }

  render() {
    const { songFile } = this.props;
    return (
      <span>
        <button
          type="button"
          id="volume"
          className="button"
          onClick={() => songFile.volume = 0}
          aria-label="volume"
        />
      </span>
    );
  }
}

Volume.propTypes = {
  songFile: PropTypes.shape({
    volume: PropTypes.number.isRequired,
  }).isRequired,
};

export default Volume;
