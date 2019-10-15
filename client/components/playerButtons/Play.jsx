/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Play = () => (
  <div>
    <button type="button" id="play" className="button" onClick={() => {alert('play clicked!');}} />
  </div>
);

export default Play;
