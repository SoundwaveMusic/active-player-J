/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function Play({ playSong }) {
  return (
    <div>
      <button type="button" id="play" className="button" onClick={playSong} />
    </div>
  );
}

export default Play;
