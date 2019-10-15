/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Play from './playerButtons/Play';
import Button from './playerButtons/Button';
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
    helpers.togglePlay = helpers.togglePlay.bind(this);
  }

  componentDidMount() { helpers.mount.call(this); }

  render() {
    const { playerSong, songFile } = this.state;

    return (
      <footer>
        <Button id="back" />
        {songFile && songFile.paused ? (
          <Play playSong={() => helpers.togglePlay(songFile)} />
        ) : (
          <Pause pauseSong={() => helpers.togglePlay(songFile)} />
        )}
        <Button id="next" />
        <Button id="shuffle" />
        <Button id="repeat" />
      </footer>
    );
  }
}
export default App;
