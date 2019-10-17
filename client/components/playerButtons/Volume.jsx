import React from 'react';

function Volume() {
  return (
    <span>
      <button
        type="button"
        id="volume"
        className="button"
        onClick={() => alert(`Clicked ${id}!`)}
        aria-label="volume"
      />
    </span>
  );
}

export default Volume;
