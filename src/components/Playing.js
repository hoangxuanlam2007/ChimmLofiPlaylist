import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import Swal from 'sweetalert2'

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
    const handleWebStartSong = () => {
        handleSetSong(song.id = 0) // song.id = 0
        handleSetSong(song.id + 1) // song.id + 1
        handleSetSong(song.id - 1) // return song id to 0, make the browser think that user just change the song twice so that we can now able to use shortcuts to control the player
    }
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
window.addEventListener('keydown', function(e) {
  if(e.keyCode === 38 && e.target === document.body) {
    e.preventDefault();
  }
});
window.addEventListener('keydown', function(e) {
  if(e.keyCode === 40 && e.target === document.body) {
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
// 3| Hover volumebar area to show the volume-indicator
// 4| Hover volumebar area to change the style of filled-volume-bar
window.onload = function onloadFunction() { //load this function onload
  mainFunction(); //run the mainFunction first
  
  setTimeout(() => {
    handleWebStartSong();
  }, 3000);

  // --------------------------- //


  // --------------------------- //
  //        Main Function        //
  // --------------------------- //

 function mainFunction() {
  let Container = document.getElementsByClassName('rhap_progress-container');
  let Indicator = document.getElementsByClassName('rhap_progress-indicator');
  let Filled = document.getElementsByClassName('rhap_progress-filled');
  let volumeContainer = document.getElementsByClassName('rhap_volume-bar-area');
  let volumeIndicator = document.getElementsByClassName('rhap_volume-indicator');
  let volumeFilled = document.getElementsByClassName('rhap_volume-filled');

  Container[0].onmouseover = function(){
    Indicator[0].style.opacity = "1"; //1
    Filled[0].style.background = "#22acb6"; //2
  }

  Container[0].onmouseout = function(){
    Indicator[0].style.opacity = "0"; //1
    Filled[0].style.background = "#dadada"; //2
  }

  setStyleVolumeBar();

  volumeContainer[0].onmouseover = function(){
    volumeIndicator[0].style.opacity = "1"; //3
    volumeFilled[0].style.background = "#22acb6"; //4
  }
  volumeContainer[0].onmouseout = function(){

    volumeIndicator[0].style.opacity = "0"; //3
    volumeFilled[0].style.background = "#dadada"; //4
  }
 }
}

// Shortcut
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 32:
      event.preventDefault();
      playPause();
  }
};

var lofi = document.querySelector('audio');
function playPause() { 
  if (lofi.paused) {
          lofi.play();
      }
  else {
          lofi.pause();
      }
}

// ------------------------------------ //

let volumeIndicator = document.getElementsByClassName('rhap_volume-indicator');
let volumeFilled = document.getElementsByClassName('rhap_volume-filled');
  let Filled = document.getElementsByClassName('rhap_progress-filled'); //Extra
function setStyleVolumeBar() {
  volumeFilled[0].style.background = "#dadada";
  Filled[0].style.background = "#dadada"; //Extra
  volumeIndicator[0].style.opacity = "0";
}

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        volume={0.1}
        hasDefaultKeyBindings={false}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        showFilledVolume={true}
        showDownloadProgress={false}
        autoPlay={false}
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

  // --------------------------- //
  //        Welcome dialog       //
  // --------------------------- //

export const welcome = () => {
  Swal.fire({
    title: "Chào mừng bạn đã đến với Chimmyw Lofi Playlist!", 
    html: "<span class='shortcut-header'>Phím tắt:</span></br><span class='shortcut'><span class='btnshort'><--</span>:<span class='normalshortcut'>Bài trước</span></br><span class='btnshort'>--></span>:<span class='normalshortcut'>Bài sau</span></br><span class='btnshort'>[dấu cách]</span>:<span class='normalshortcut'>Dừng/Phát nhạc</span></span>",  
    showConfirmButton: 'true',
    confirmButtonText: `Cảm ơn`,
  })
    .then((result) => {
      if (result.isConfirmed) {
        document.querySelector('audio').play();
      }
  });
}