/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import helpers from '../helpers';
import Play from './playerButtons/Play';
import Pause from './playerButtons/Pause';
import Button from './playerButtons/Button';
import Volume from './playerButtons/Volume';
import Player from './animatedPlayer/Player';
import InfoBar from './SongInfo/InfoBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      playerSong: null,
      songFile: null,
      timestamp: 0,
    };
    this.togglePlay = helpers.togglePlay.bind(this);
    this.tick = helpers.tick.bind(this);
    this.like = helpers.like.bind(this);
  }

  componentDidMount() { helpers.mount.call(this); }

  render() {
    const { playerSong, songFile, timestamp } = this.state;

    return (
      <footer>
        <div id="container">
          <Button id="back" />
          {songFile && songFile.paused ? (
            <Play playSong={() => this.togglePlay(songFile)} />
          ) : (
            <Pause pauseSong={() => this.togglePlay(songFile)} />
          )}
          <Button id="next" />
          <Button id="shuffle" />
          <Button id="repeat" />
          <div id="player">
            {songFile
              && <Player length={playerSong.length} timestamp={timestamp} />}
          </div>
          <Volume />
          <div id="infoBar">
            {playerSong
              && <InfoBar playerSong={playerSong} like={this.like} />}
          </div>
        </div>
      </footer>
    );
  }
}
export default App;
