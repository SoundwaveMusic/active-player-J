import axios from 'axios';

const helpers = {
  mount() {
    console.log('inside mount');
    axios.get('/songs')
      .then((results) => this.setState({ songs: results.data, playerSong: results.data[0] }))
      .then(() => console.log('state', this.state))
      .catch((err) => console.log('err: ', err));
  },
};

export default helpers;
