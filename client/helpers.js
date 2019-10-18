import axios from 'axios';

const helpers = {
  // Current Player song will always be the first song in the next up playlist
  mount() {
    // 1) Get all the songs as the default playlist
    // 2) Splice out first song and push to upNext playlist
    // 3) When setting state, make a songFile out of upNext[0]
    // 4) Set state: songs, upNext, songFile
    axios.get('/songs')
      .then((results) => this.setState({
        songs: results.data,
        playerSong: results.data[0],
        songFile: new Audio(results.data[0].songFile),
        timestamp: 0,
      }))
      .then(() => console.log('state', this.state))
      .catch((err) => console.log('mount err: ', err));
  },
  next() {
    // 1) Splice first song in upNext and push to previousPlays
    // 2) if upNext is empty, splice first song in songs and push to upNext
    // 3) Set state: songs, upNext, previousPlays, *new* songFile, timestamp 0
  },
  back() {
    // 1) If previousPlays is not empty pop last song and push into upNext
    // 2) Set state: upNext, previousPlays, *new* songFile, timestamp 0
  },
  togglePlay(songFile) {
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
    this.setState({ timestamp: songFile.currentTime });
  },
  like(songId, isLiked) {
    axios.post(`/like/${songId}`, { isliked: isLiked })
      .then(() => axios.get('./songs'))
      .then((results) => this.setState({ songs: results.data }))
      .then(() => console.log('state after like ', this.state))
      .catch((err) => console.log('like err', err));
  },
};

export default helpers;
