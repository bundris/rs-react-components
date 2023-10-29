import React, { Component } from 'react';

class ErrorButton extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={() => {
          throw new Error('Artificial error');
        }}
      >
        Error generator
      </button>
    );
  }
}

export default ErrorButton;
