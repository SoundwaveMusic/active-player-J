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
    // 2) If both upNext and songs are empty, call mount to reset state: songs, upnext songfile

    if (upNext.length === 0 && songs.length === 0) {
      this.mount();
    } else {
      // 3) Else if upNext is empty, splice first song in songs and push to upNext
      if (upNext.length === 0) {
        upNext.push(songs.shift());
      }
      // Then, set state: songs, upNext, previousPlays, *new* songFile, timestamp 0
      this.setState({
        upNext,
        previousPlays,
        songs,
        timestamp: 0,
        songFile: new Audio(upNext[0].songFile),
      });
    }
  },
  back() {
    const { songFile, upNext, previousPlays } = this.state;
    // stop current song with timestampId
    songFile.pause();
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
  scrub(newTimestamp) {
    // Change the value of currentTime to the new timestamp
    const { songFile } = this.state;
    songFile.currentTime = newTimestamp;
    // setState for the timestamp property
    this.setState({ timestamp: newTimestamp });
  },
};

export default playerHelpers;
