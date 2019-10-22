import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/button.css'

class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { volume: props.songFile.volume, isMuted: false };
    this.muteToggle = this.muteToggle.bind(this);
  }

  muteToggle() {
    const { volume, isMuted } = this.state;
    const { songFile } = this.props;
    if (isMuted) {
      songFile.volume = volume;
    } else {
      songFile.volume = 0;
    }
    this.setState({ isMuted: !isMuted });
  }

  render() {
    const { isMuted } = this.state;

    return (
      <span>
        <button
          type="button"
          className={isMuted ? styles.mute : styles.volume}
          onClick={this.muteToggle}
          aria-label={isMuted ? 'un-mute' : 'mute'}
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
