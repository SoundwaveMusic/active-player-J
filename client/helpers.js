import axios from 'axios';

const helpers = {
  mount() {
    console.log('inside mount');
    axios.get('/songs')
      .then((results) => this.setState({
        songs: results.data,
        playerSong: results.data[0],
        songFile: new Audio(results.data[0].songfile),
      }))
      .then(() => console.log('state', this.state))
      .catch((err) => console.log('err: ', err));
  },
  togglePlay(songFile) {
    if (songFile.paused) {
      songFile.play();
      console.log('songFile is playing: ', !songFile.paused);
      this.setState({});
    } else {
      songFile.pause();
      console.log('songFile is now paused: ', songFile.paused, 'at ', songFile.currentTime);
      this.setState({});
    }
  },
};

export default helpers;
