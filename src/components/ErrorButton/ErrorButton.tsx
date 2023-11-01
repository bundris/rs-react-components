import React, { Component } from 'react';

class ErrorButton extends Component {
  static triggerError = (): void => {
    throw new Error('Morty, you failed again');
  };

  state = {
    errorBtnPressed: false,
  };

  handleClick = () => {
    this.setState({
      errorBtnPressed: true,
    });
  };

  render() {
    const { errorBtnPressed } = this.state;
    errorBtnPressed ? ErrorButton.triggerError() : '';
    return (
      <button type="button" onClick={this.handleClick}>
        Error generator
      </button>
    );
  }
}

export default ErrorButton;
