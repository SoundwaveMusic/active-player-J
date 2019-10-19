import axios from 'axios';

const playerHelpers = {
  // Current Player song will always be the first song in the next up playlist
  next() {
    const { songFile, upNext, previousPlays, songs } = this.state;
    // stop current song with timestampId
    songFile.pause();
    clearInterval(this.timestampID);
    // 1) Splice first song in upNext and push to previousPlays
    previousPlays.push(upNext.shift());
    // 2) if upNext is empty, splice first song in songs and push to upNext
    if (upNext.length === 0) {
      upNext.push(songs.shift());
    }
    // 3) Set state: songs, upNext, previousPlays, *new* songFile, timestamp 0
    this.setState({
      upNext,
      previousPlays,
      songs,
      timestamp: 0,
      songFile: new Audio(upNext[0].songFile),
    });
  },
  back() {
    const { songFile, upNext, previousPlays } = this.state;
    // stop current song with timestampId
    this.state.songFile.pause();
    clearInterval(this.timestampID);
    // 1) If previousPlays is not empty pop last song and shift into upNext at first position
    if (previousPlays.length > 0) {
      upNext.unshift(previousPlays.pop());
    }
    // 2) Set state: upNext, previousPlays, *new* songFile, timestamp 0
    this.setState({
      upNext,
      previousPlays,
      timestamp: 0,
      songFile: new Audio(upNext[0].songFile),
    });
  },
  togglePlay(songFile) {
    // If paused, play and vice versa
    // When playing, initialize per second call to tick
    // When pausing, clear the interval to stop per second calls
    if (songFile.paused) {
      songFile.play();
      this.timestampID = setInterval(() => this.tick(songFile), 1000);
    } else {
      songFile.pause();
      this.setState({ timestamp: songFile.currentTime });
      clearInterval(this.timestampID);
    }
  },
  tick(songFile) {
    // Tick is called each second when playing,
    //   storing the currentTime property from the Audio element
    this.setState({ timestamp: songFile.currentTime });
  },
};

export default playerHelpers;
