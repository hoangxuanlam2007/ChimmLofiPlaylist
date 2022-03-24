import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handleNextSong = () => {
      handleSetSong(song.id + 1)
    }
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }
// Prevent the page scrolling when pressed Spacebar
// Không cho trang tự lướt xuống dưới khi ấn Space (fix bug)
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
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        volume={0.1}
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