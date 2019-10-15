import axios from 'axios';

const helpers = {
  mount: () => {
    console.log('inside mount');
    axios.get('/songs')
      .then((results) => this.setState({ songs: results.data, playerSong: results.data[0] }))
      .catch((err) => this.componentDidCatch(err));
  },
};

export default helpers;
