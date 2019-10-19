import axios from 'axios';

const metaHelpers = {
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
  like(songId, isLiked) {
    const { upNext } = this.state;
    //  Post to the "/like:songId" route to toggle like status
    axios.post(`/like/${songId}`, { isliked: isLiked })
      .then(() => axios.get('./songs'))
      .then((results) => {
        const songs = results.data;
        // if songId is current player song, toggle isliked to re-render "like" status
        if (songId === upNext[0].songId) {
          const likeStatus = upNext[0].isliked;
          upNext[0].isliked = likeStatus ? 0 : 1;
        }
        return this.setState({ upNext, songs: results.data })
      })
      .then(() => console.log('state after like ', this.state))
      .catch((err) => console.log('like err', err));
  },
  //  *IF TIME REFACTOR:
  //  *Get nextUp songIds, use Promise.each to:
  //    *use '/songs/:id' to get the song obj
  //    *then push result to upNext arr
  //    *When all promises complete: setState with upNext
  //  *Do the same for previousPlays^
};

export default metaHelpers;
