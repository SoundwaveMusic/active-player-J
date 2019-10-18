import React from 'react';
import PropTypes from 'prop-types';

function MetaData({ isLiked }) {
//   const click = (type, value) => {
//     alert(`Redirecting to the ${type} page for ${value}`);
//   };
  console.log(isLiked);

  return (
    <div id="metaDataGrid">
      <div className="like metaButton" id={isLiked ? 'liked' : 'like'} />
      <div className="nextUp metaButton" />
    </div>
  );
}

MetaData.propTypes = {
  isLiked: PropTypes.number.isRequired,
};

export default MetaData;
