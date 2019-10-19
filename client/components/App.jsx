/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import metaHelpers from '../metaHelpers';
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
      upNext: [],
      previousPlays: [],
      songFile: null,
      timestamp: 0,
    };
    this.togglePlay = helpers.togglePlay.bind(this);
    this.tick = helpers.tick.bind(this);
    this.like = metaHelpers.like.bind(this);
    this.next = helpers.next.bind(this);
    this.back = helpers.back.bind(this);
  }

  componentDidMount() { metaHelpers.mount.call(this); }

  render() {
    const { songs, upNext, songFile, timestamp } = this.state;

    return (
      <footer>
        <div id="container">
          <Button id="back" clickHandler={this.back} />
          {songFile && songFile.paused ? (
            <Play playSong={() => this.togglePlay(songFile)} />
          ) : (
            <Pause pauseSong={() => this.togglePlay(songFile)} />
          )}
          <Button id="next" clickHandler={this.next} />
          <Button id="shuffle" clickHandler={() => alert('Clicked shuffle!')} />
          <Button id="repeat" clickHandler={() => alert('Clicked repeat!')} />
          <div id="player">
            {songFile
              && <Player length={upNext[0].length} timestamp={timestamp} />}
          </div>
          <Volume />
          <div id="infoBar">
            {upNext[0]
              && <InfoBar playerSong={upNext[0]} like={this.like} />}
          </div>
        </div>
      </footer>
    );
  }
}
export default App;
