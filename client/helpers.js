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
      .catch((err) => console.log('mount err: ', err));
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
  like(songid, isLiked) {
    axios.post(`/like/${songid}`, { isliked: isLiked })
      .then(() => axios.get('./songs'))
      .then((results) => this.setState({ songs: results.data }))
      .then(() => console.log('state after like ', this.state))
      .catch((err) => console.log('like err', err));
  },
};

export default helpers;
