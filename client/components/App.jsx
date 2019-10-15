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
      isPlaying: false,
      playerSong: null,
    };
    this.songRef = React.createRef();
  }

  componentDidMount() { helpers.mount.call(this); }

  render() {
    const { isPlaying, playerSong } = this.state;
    const songFile = new Audio('https://sound-clout.s3-us-west-1.amazonaws.com/01+Wakin+On+A+Pretty+Day.mp3');
    console.log(songFile);

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

/*
<audio preload="auto" src={playerSong.songfile} />
*/