import React, {Component} from 'react';

export default class Preloader extends Component {
  render() {
    return (
      <div className="preloader-area">
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      </div>
    );
  };
}