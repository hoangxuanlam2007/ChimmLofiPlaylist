import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

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

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        volume={0.25}
        autoPlay={false}
        hasDefaultKeyBindings={false}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        showFilledVolume={true}
        onEnded={handleNextSong}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
}