import axios from 'axios';

const urlParams = new URLSearchParams(window.location.search);
const playlistId = urlParams.get('id');

const metaHelpers = {
  // Current Player song will always be the first song in the next up playlist
  mount() {
    axios.get(`/songs/${playlistId}`)
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
          songFile: new Audio(upNext[0].songfile),
        })
      })
      .catch((err) => console.log('mount err: ', err));
  },
  tick(songFile) {
    const { songs, upNext, repeat } = this.state;
    // If the song has ended
    //   1) clear the interval,
    //   2) repeat song if necessary,
    //   3) call next if possible,
    //   4) if repeating all AND at the end, restart with previousPlays
    const isEnded = songFile.ended;
    if (isEnded) {
      clearInterval(this.timestampID);
      if (repeat === 'Song') {
        songFile.currentTime = 0;
        this.setState({ timestamp: 0 });
      } else if (songs.length > 0 || upNext.length > 0) {
        this.next();
      } else if (repeat === 'List') {
        // mount makes a request for the songList, and resets state for songs, upNext, and songFile
        this.mount();
      }
    } else {
      // Tick is called each second when playing,
      //   storing the currentTime property from the Audio element
      this.setState({ timestamp: songFile.currentTime });
    }
  },
  shuffle() {
    const { shuffle } = this.state;
    let newStatus;
    //  check shuffle state and rotate between '' and '-alt', where '' references the default classname
    if (shuffle === '') {
      newStatus = '-alt';
    } else {
      newStatus = '';
    }
    this.setState({ shuffle: newStatus });
  },
  repeat() {
    const { repeat } = this.state;
    let newStatus;
    //  check repeat state and rotate between: '' to 'List' to 'Song' back to ''
    if (repeat === '') {
      newStatus = 'List';
    } else if (repeat === 'List') {
      newStatus = 'Song';
    } else {
      newStatus = '';
    }
    this.setState({ repeat: newStatus });
  },
  like(songId, isLiked) {
    const { upNext } = this.state;
    //  Post to the "/like:songId" route to toggle like status
    axios.put(`/like/${songId}`, { isliked: !isLiked })
      .then(() => {
        // if songId is current player song, toggle isliked to re-render "like" status
        if (songId === upNext[0].song_id) {
          upNext[0].isliked = !isLiked
        }
        return this.setState({ upNext });
      })
      .catch((err) => console.log('like err', err));
  }
  //  *IF TIME REFACTOR:
  //  *Get nextUp songIds, use Promise.each to:
  //    *use '/songs/:id' to get the song obj
  //    *then push result to upNext arr
  //    *When all promises complete: setState with upNext
  //  *Do the same for previousPlays^
};

export default metaHelpers;
