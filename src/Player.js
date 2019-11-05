import React from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from "video-react";

export default props => {
  return (
    <Player poster="/assets/poster.png" autoplay={true}>
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

      <ControlBar autoHide={false} className="my-class" />
    </Player>
  );
};
