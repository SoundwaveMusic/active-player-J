import React from 'react';
import PropTypes from 'prop-types';

function MetaData({ songId, isLiked, like }) {
  const click = () => {
    like(songId, isLiked);
  };
  console.log('songId: ', songId);
  console.log('isLiked ', isLiked);

  return (
    <div id="metaDataGrid">
      <div className="like metaButton" id={isLiked ? 'liked' : 'like'} onClick={click} />
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
