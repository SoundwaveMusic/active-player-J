import axios from 'axios';

const helpers = {
  mount() {
    axios.get('/songs')
      .then((results) => this.setState({
        songs: results.data,
        playerSong: results.data[0],
        songFile: new Audio(results.data[0].songfile),
        timestamp: 0,
      }))
      .then(() => console.log('state', this.state))
      .catch((err) => console.log('err: ', err));
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
};

export default helpers;
