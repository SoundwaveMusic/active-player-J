/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import helpers from '../helpers';
import Play from './playerButtons/Play';
import Pause from './playerButtons/Pause';
import Button from './playerButtons/Button';
import Player from './animatedPlayer/Player';


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
        <div id="container">
          <Button id="back" />
          {songFile && songFile.paused ? (
            <Play playSong={() => helpers.togglePlay(songFile)} />
          ) : (
            <Pause pauseSong={() => helpers.togglePlay(songFile)} />
          )}
          <Button id="next" />
          <Button id="shuffle" />
          <Button id="repeat" />
          {songFile && <Player songFile={songFile} length={playerSong.length} />}
        </div>
      </footer>
    );
  }
}
export default App;
