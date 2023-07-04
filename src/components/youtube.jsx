import React from 'react';
import YouTube from 'react-youtube';

// get widt and height of the screen
const width = window.innerWidth;
const height = window.innerHeight;

const opts = {
    height: {height},
    width: {width},
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    //   controls: 0,
      autoplay: 1,
      loop: 1,
        playlist: 'tyBJioe8gOs',
    },
};

function onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    // event.target.playVideo();
    event.target.mute();
}

function YoutubeVideo() {
    return <YouTube videoId="tyBJioe8gOs" opts={opts} onReady={onReady} />;
  }

export default YoutubeVideo;