import React from 'react';
import PropTypes from 'prop-types';
import getTime from './getTime';

class Remaining extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLengthRemaining: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isLengthRemaining } = this.state;
    this.setState({ isLengthRemaining: !isLengthRemaining });
  }

  render() {
    const { length, elapsed } = this.props;
    const { isLengthRemaining } = this.state;
    const remaining = `-${getTime(length - elapsed)}`;
    const total = getTime(length);

    return (
      <div className="timeBox">
        <span
          id="remaining"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          role="button"
          tabIndex="-1"
        >
          {isLengthRemaining ? (remaining) : (total)}
        </span>
      </div>
    );
  }
}

Remaining.propTypes = {
  length: PropTypes.number.isRequired,
  elapsed: PropTypes.number.isRequired,
};

export default Remaining;
