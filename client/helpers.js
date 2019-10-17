import axios from 'axios';

const helpers = {
  mount() {
    console.log('inside mount');
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
      console.log(this);
      this.timestampID = setInterval(() => helpers.tick(songFile), 1000);
      console.log(this.timestampID);
    } else {
      songFile.pause();
      console.log('songFile is now paused: ', songFile.paused, 'at ', songFile.currentTime);
      this.setState({ timestamp: songFile.currentTime });
      clearInterval(this.timestampID);
    }
  },
  tick(songFile) {
    this.setState({ timestamp: songFile.currentTime });
    console.log(this.state);
  },
};

export default helpers;
