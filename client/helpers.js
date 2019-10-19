import axios from 'axios';

const helpers = {
  // Current Player song will always be the first song in the next up playlist
  mount() {
    axios.get('/songs')
      .then((results) => {
        // 1) Get all the songs as the default playlist
        const songs = results.data;
        // 2) Splice out first song and push to upNext playlist
        const upNext = [];
        upNext.push(songs.shift());
        // 3) When setting state, make a songFile out of upNext[0]
        // 4) Set state: songs, upNext, songFile
        return this.setState({
          songs,
          upNext,
          songFile: new Audio(upNext[0].songFile),
        });
      })
      .then(() => console.log('state', this.state))
      .catch((err) => console.log('mount err: ', err));
  },
  next() {
    const { upNext, previousPlays, songs } = this.state;
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
    // 1) If previousPlays is not empty pop last song and push into upNext
    // 2) Set state: upNext, previousPlays, *new* songFile, timestamp 0
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
  like(songId, isLiked) {
    //  Post to the "/like:songId" route to toggle like status
    //  Get all songs, and set the state for songs
    //  Get nextUp songIds, use Promise.each to:
    //    use '/songs/:id' to get the song obj
    //    then push result to upNext arr
    //    When all promises complete: setState with upNext
    //  Do the same for previousPlays^
    axios.post(`/like/${songId}`, { isliked: isLiked })
      .then(() => axios.get('./songs'))
      .then((results) => this.setState({ songs: results.data }))
      .then(() => console.log('state after like ', this.state))
      .catch((err) => console.log('like err', err));
  },
};

export default helpers;
