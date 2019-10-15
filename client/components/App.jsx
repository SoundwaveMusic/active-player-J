import React from 'react';
import Play from './playerButtons/Play';
import helpers from '../helpers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { songs: [], isPlaying: false, playerSong: null };
  }

  componentDidMount() { helpers.mount.call(this); }

  render() {
    const { songs, isPlaying, playerSong } = this.state;
    const songfile = new Audio('https://sound-clout.s3-us-west-1.amazonaws.com/01+Wakin+On+A+Pretty+Day.mp3');

    return (
      <div>
        <header>
          <h1>Active Player</h1>
        </header>
        <footer>
          <Play playSong={() => songfile.play()} />
        </footer>
      </div>
    );
  }
}

export default App;
