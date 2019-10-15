import React from 'react';
import axios from 'axios';
import PlayerSound from './PlayerSound';
import Play from './playerButtons/Play';
import Pause from './playerButtons/Pause';
import helpers from '../helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isPlaying: false,
      playerSong: null,
    };
  }

  componentDidMount() { helpers.mount.call(this); }

  render() {
    // const { songs, isPlaying, playerSong, songFile } = this.state;
    const songFile = new Audio('https://sound-clout.s3-us-west-1.amazonaws.com/01+Wakin+On+A+Pretty+Day.mp3');
    // console.log(songFile);

    return (
      <div>
        <header>
          <h1>Active Player</h1>
        </header>
        <footer>
          <Play playSong={() => songFile.play()} />
          <Pause pauseSong={() => songFile.pause()} />
        </footer>
      </div>
    );
  }
}

export default App;

//<PlayerSound playerSong={this.state.playerSong} isPlaying={this.state.isPlaying} />