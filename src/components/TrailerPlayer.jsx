import React from "react";
import YouTube from "react-youtube";

const TrailerPlayer = ({ title, data }) => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <h1>{title}</h1>
      <YouTube videoId={data} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default TrailerPlayer;
