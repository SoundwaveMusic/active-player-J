/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function Pause({ pauseSong }) {
  return (
    <div>
      <button type="button" id="pause" className="button" onClick={pauseSong} />
    </div>
  );
}

export default Pause;
