import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';

function MetaData({ songId, isLiked, like }) {

  return (
    <div id="metaDataGrid">
      <Like songId={songId} isLiked={isLiked} like={like} />
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
