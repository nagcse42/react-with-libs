import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div>
      <ReactPlayer
        width="700px"
        height="500px"
        controls
        url="https://www.youtube.com/watch?v=iRaelG7v0OU"
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onStart callback")}
        onPause={() => console.log("onPause callback")}
        onError={() => console.log("onError callback")}
        onEnded={() => console.log("onEnd callback")}
      />
    </div>
  );
}

export default VideoPlayer;
