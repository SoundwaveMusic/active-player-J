import React from 'react';
import PropTypes from 'prop-types';

class Repeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repeatAll: false, repeatSong: false }
  }
  click() {
    
  }
  render() {
    
  }
}

Repeat.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Repeat;