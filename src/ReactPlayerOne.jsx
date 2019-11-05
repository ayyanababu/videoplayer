import React, { Component } from "react";
import ReactPlayer from "react-player";

class ReactPlayerOne extends Component {
  render() {
    return (
      <div className="playerContainer">
        <ReactPlayer
          url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          playing
          controls
          muted
          width="100vw"
          height="100vh"
        />
        <div className="button">
          <span className="text">Start Survey</span>
        </div>
      </div>
    );
  }
}

export default ReactPlayerOne;
