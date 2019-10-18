import React from 'react';
import PropTypes from 'prop-types';

function MetaData({ songId, isLiked, like }) {
  let currentLike = isLiked;
  const click = () => {
    like(songId, isLiked);
    currentLike = isLiked ? 0 : 1;
  };

  return (
    <div id="metaDataGrid">
      <div
        className="like metaButton"
        id={currentLike ? 'liked' : 'like'}
        onClick={click}
        onKeyDown={click}
        role="button"
        tabIndex="-1"
        aria-label="like"
      />
      <div className="nextUp metaButton" />
    </div>
  );
}

MetaData.propTypes = {
  songId: PropTypes.number.isRequired,
  isLiked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default MetaData;
