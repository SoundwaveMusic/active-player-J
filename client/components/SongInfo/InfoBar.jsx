import React from 'react';
import PropTypes from 'prop-types';
import MetaData from './MetaData';


function InfoBar({ playerSong }) {
  const click = (type, value) => {
    alert(`Redirecting to the ${type} page for ${value}`);
  };

  return (
    <div id="infoContainer">
      <div
        id="albumArt"
        role="button"
        onClick={() => click('album', playerSong.album)}
        onKeyDown={() => click('album', playerSong.album)}
        tabIndex="-1"
        aria-label="album"
      >
        <img className="albumArt" alt="album artwork" src={playerSong.thumbnail} />
      </div>
      <div id="infoGrid">
        <div
          id="artist"
          role="button"
          onClick={() => click('artist', playerSong.artist)}
          onKeyDown={() => click('artist', playerSong.artist)}
          tabIndex="-1"
          aria-label="artist"
        >
          {playerSong.artist}
        </div>
        <div
          id="title"
          role="button"
          onClick={() => click('song', playerSong.title)}
          onKeyDown={() => click('song', playerSong.title)}
          tabIndex="-1"
          aria-label="song title"
        >
          {playerSong.title}
        </div>
      </div>
      <MetaData isLiked={playerSong.isliked} />
    </div>
  );
}

InfoBar.propTypes = {
  playerSong: PropTypes.shape({
    album: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isliked: PropTypes.number.isRequired,
  }).isRequired,
};

export default InfoBar;
