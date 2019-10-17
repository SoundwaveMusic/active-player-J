import React from 'react';
import PropTypes from 'prop-types';


function InfoBar({ playerSong }) {
  const clickAlbum = () => {
    alert(`Redirecting to the album page for ${playerSong.album}`);
  };

  return (
    <div id="infoContainer">
      <span
        className="albumArt"
        role="button"
        onClick={clickAlbum}
        onKeyDown={clickAlbum}
        tabIndex="-1"
        aria-label="album"
      >
        <img className="albumArt" alt="album artwork" src={playerSong.thumbnail} />
      </span>
      <div id="infoGrid">
        <div className="info" id="artist" />
        <div className="info" id="title" />
      </div>
    </div>
  );
}

InfoBar.propTypes = {
  playerSong: PropTypes.shape({
    album: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default InfoBar;
