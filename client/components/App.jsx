/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Play from './playerButtons/Play';
import Pause from './playerButtons/Pause';
import helpers from '../helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      playerSong: null,
      songFile: null,
    };
  }

  componentDidMount() { helpers.mount.call(this); }

  render() {
    const { playerSong, songFile } = this.state;

    return (
      <div>
        <header>
          <h1>Active Player</h1>
        </header>
        <footer>
          {songFile && songFile.paused ? (
            <Play playSong={helpers.togglePlay.bind(this, songFile)} />
          ) : (
            <Pause pauseSong={helpers.togglePlay.bind(this, songFile)} />
          )}
        </footer>
      </div>
    );
  }
}
export default App;
