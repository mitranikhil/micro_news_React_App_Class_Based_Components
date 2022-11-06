import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
    <div className="text-center my-2">
      <div className="spinner-grow spinner-grow-sm my-2 mx-1 text-secondary" role="status"></div>
      <div className="spinner-grow spinner-grow-sm my-2 mx-1 text-secondary" role="status"></div>
      <div className="spinner-grow spinner-grow-sm my-2 mx-1 text-secondary" role="status"></div>
    </div>
    );
  }
}