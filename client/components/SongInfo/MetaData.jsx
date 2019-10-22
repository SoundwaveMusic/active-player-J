import React from 'react';
import PropTypes from 'prop-types';
import Like from './Like';
import UpNext from './UpNext';
import styles from '../../cssModules/infobar.css'

function MetaData({ songId, isLiked, like }) {

  return (
    <div className={styles.metaDataGrid}>
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
