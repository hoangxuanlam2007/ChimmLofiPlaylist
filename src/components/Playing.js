import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

// Icons
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { BsSkipStartFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { MdRepeatOne } from "react-icons/md";
import { MdRepeat } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";

export default function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handleNextSong = () => {
        handleSetSong(song.id + 1)
        document.getElementsByClassName("text-teal-400")[0].scrollIntoView({block: 'center', behavior: 'smooth'})
    }
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
        document.getElementsByClassName("text-teal-400")[0].scrollIntoView({block: 'center', behavior: 'smooth'})
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
        document.getElementsByClassName("text-teal-400")[0].scrollIntoView({block: 'center', behavior: 'smooth'})
    }
// Prevent the page scrolling when pressed Spacebar
window.addEventListener('keydown', function(e) {
  if(e.keyCode === 32 && e.target === document.body) {
    e.preventDefault();
  }
});
// Disable Default TAB function
window.addEventListener('keydown', function(e) {
  if(e.keyCode === 9 && e.target === document.body) {
    e.preventDefault();
  }
});
// Disable arrow keys
window.addEventListener('keydown', function(e) {
  if(e.keyCode === 37 && e.target === document.body) {
    e.preventDefault();
  }
});
window.addEventListener('keydown', function(e) {
  if(e.keyCode === 39 && e.target === document.body) {
    e.preventDefault();
  }
});
// Shortcut
document.body.onkeydown = function(e){
  if (e.keyCode == '37') {
    handleClickPre();
  }
  else if (e.keyCode == '39') {
    handleClickNext();
  }
}

// ------------------------------------ //
// I spent a lot of fvking time on these 
// code so please do not copy it.
//                 -----                //
// 1| Hover progress container to show the progress-indicator
// 2| Hover progress container to change the style of filled-progress-bar
window.onload = function() { //load this function onload
  let Container = document.getElementsByClassName('rhap_progress-container');
  let Indicator = document.getElementsByClassName('rhap_progress-indicator');
  let Filled = document.getElementsByClassName('rhap_progress-filled');

  Container[0].onmouseover = function(){
    Indicator[0].style.opacity = "1"; //1
    Filled[0].style.background = "#22acb6"; //2
  }

  Container[0].onmouseout = function(){
    Indicator[0].style.opacity = "0"; //1
    Filled[0].style.background = "#dbdbdb"; //2
  }
}
// ------------------------------------ //

var lofi = document.querySelector('audio');
function playPause() { 
  if (lofi.paused) {
          lofi.play();
      }
  else {
          lofi.pause();
      }
} 

document.onkeydown = function(event) {
  switch (event.keyCode) {
     case 32:
          event.preventDefault();
          playPause();
        break;
     
  }
};

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        volume={0.20}
        hasDefaultKeyBindings={false}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        showFilledVolume={true}
        showDownloadProgress={false}
        onEnded={handleNextSong}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        customIcons={{
          play: <BsPlayFill />,
          pause: <BsPauseFill />,
          previous: <BsSkipStartFill />,
          next: <BsFillSkipEndFill />,
          loop: <MdRepeatOne />,
          loopOff: <MdRepeat />,
          volume: <IoMdVolumeHigh />,
          volumeMute: <IoMdVolumeOff />
        }}
      />
    </div>
  );
}