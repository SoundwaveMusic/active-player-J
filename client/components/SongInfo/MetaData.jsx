import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';
import UpNext from './UpNext';

function MetaData({ songId, isLiked, like }) {

  return (
    <div className="metaDataGrid">
      <Like songId={songId} isLiked={isLiked} like={like} />
      <UpNext />
    </div>
  );
}

MetaData.propTypes = {
  songId: PropTypes.number.isRequired,
  isLiked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default MetaData;
