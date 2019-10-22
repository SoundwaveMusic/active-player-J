import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../cssModules/infobar.css';

function Like({ songId, isLiked, like }) {
  const click = () => {
    like(songId, isLiked);
  };

  return (
    <div
      className={isLiked ? styles.liked : styles.like}
      onClick={click}
      onKeyDown={click}
      role="button"
      tabIndex="-1"
      aria-label="like"
    />
  );
}

Like.propTypes = {
  songId: PropTypes.number.isRequired,
  isLiked: PropTypes.number.isRequired,
  like: PropTypes.func.isRequired,
};

export default Like;
