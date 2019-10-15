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
      songfile: null,
    };
    //helpers.togglePlay= helpers.togglePlay.bind(this);
  }

  componentDidMount() { helpers.mount.call(this); }

  render() {
    const { playerSong, songfile } = this.state;

    return (
      <div>
        <header>
          <h1>Active Player</h1>
        </header>
        <footer>
          {songfile && songfile.paused ? (
            <Play playSong={helpers.togglePlay.bind(this, songfile)} />
          ) : (
            <Pause pauseSong={helpers.togglePlay.bind(this, songfile)} />
          )}
        </footer>
      </div>
    );
  }
}
export default App;
