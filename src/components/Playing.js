// ----------------------------------------------------------------------- //
//                          Give me a starr !!                             //
//                           Wrote by Chimm                                // 
// ----------------------------------------------------------------------- //
// chimmlofiplaylist v2.0.0
// @hoangxuanlam2007

import React, { useContext, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
import Swal from 'sweetalert2';
import { RHAP_UI } from 'react-h5-audio-player';
import $ from 'jquery'; // jQuery imported

// Icons
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { BsSkipStartFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { MdRepeatOne } from "react-icons/md";
import { MdRepeat } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeOff } from "react-icons/io";
import {MdOutlineShuffle} from "react-icons/md";
import {MdOutlineShuffleOn} from "react-icons/md";

export default function Playing() {
  // Default player control function
    const {song, handleSetSong} = useContext(Songs)
    
    // 'Simple random number generator' library
    const random = require('simple-random-number-generator')

    let songID = {
      min: 0, // Smallest possible value to return
      max: 51, // Largest possible value to return
      integer: true // Return integer instead of float
    };

    const handleWebStartSong = () => {
        handleSetSong(song.id = 0) // song.id = 0
        handleSetSong(song.id + 0) // make the browser think that user just change the song so that we can now able to use shortcuts to control the player
    }

    const handleNextSong = () => {
      // Shuffle when song ended
        if($('.rhap_shuffle-button-shuffle-on').css('display') == 'block') { // check if shuffle is on
          handleSetSong(song.id - song.id + (random(songID))); // the song.id goes randomly
          // Make song.id = 0 then add random integer number

        } else if($('.rhap_shuffle-button').css('display') == 'block') { // if shuffle is off
          handleSetSong(song.id + 1); //return normal function
        }
    }
    const handleClickNext = () => {
      // Shuffle when click next
        if($('.rhap_shuffle-button-shuffle-on').css('display') == 'block') { // check if shuffle is on
          handleSetSong(song.id - song.id + (random(songID))); // the song.id goes randomly
          // Make song.id = 0 then add random integer number

        } else if($('.rhap_shuffle-button').css('display') == 'block') { // if shuffle is off
          handleSetSong(song.id + 1); //return normal function
        }
    }
    const handleClickPre = () => {
      // Shuffle when click next
        if($('.rhap_shuffle-button-shuffle-on').css('display') == 'block') { // check if shuffle is on
          handleSetSong(song.id - song.id + (random(songID))); // the song.id goes randomly
          // Make song.id = 0 then add random integer number

        } else if($('.rhap_shuffle-button').css('display') == 'block') { // if shuffle is off
          handleSetSong(song.id - 1); //return normal function
        }
    }
    
    // Auto-croll to playing song in the playlist
    useEffect(() => {     
      setTimeout(()=>{ // Fix wrong web decisions (scroll to far)
        $("tr.text-teal-400").get(0).scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }, 1) //delay 1ms
    }, [song.id]);

    // Shuffle button
    $('.rhap_shuffle-button').click(function () {
      if($(this).css('display') == 'block') { // Check if the non-shuffle button is visible (shuffle: off)
        $(this).css('display', 'none'); // make it hide
        $('.rhap_shuffle-button-shuffle-on').css('display', 'block'); // Show the shuffle-on button (shuffle: on)
      }
    });

    $('.rhap_shuffle-button-shuffle-on').click(function () {
      if($(this).css('display') == 'block') { // Check if the shuffle button is visible (shuffle: on)
        $(this).css('display', 'none'); // make it hide
        $('.rhap_shuffle-button').css('display', 'block'); // Show the non-shuffle butoon (shuffle: off)
      }
    });
    // ===> Toggle shuffle function()


    // Prevent the page from scrolling when pressed Spacebar
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

    // ----------------------------------------------------------------------- //
    //                If you want to use some of these code                    //
    //                    Give credit to my work pls :3                        // 
    // ----------------------------------------------------------------------- //
    // 1| Hover progress container to show the progress-indicator              //
    // 2| Hover progress container to change the style of filled-progress-bar  //
    // 3| Hover volumebar area to show the volume-indicator                    //
    // 4| Hover volumebar area to change the style of filled-volume-bar        //
    // ----------------------------------------------------------------------- //

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
    function loveDate() { //loveDate Counter
      var today = new Date();
      var date_to_reply = new Date('2021-11-13');
      var timeinmilisec = date_to_reply.getTime() - today.getTime();
      var loveDay = Math.abs(Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)));
      var output = document.getElementById("sp");
      output.innerHTML = ' ' + loveDay;
    }

    setTimeout(() => {
      loveDate();
    }, 3000);
      return (
        <div>
          <AudioPlayer
            className="player-music"
            src={song.url}
            volume={0.2}
            hasDefaultKeyBindings={false}
            layout="stacked-reverse"
            showSkipControls={true}
            showJumpControls={false}
            showFilledVolume={true}
            showDownloadProgress={false}
            autoPlay={false}
            onLoadedMetaData={event => console.log(event.target.duration)}
            preload="metadata"
            onEnded={handleNextSong}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPre}
            customAdditionalControls={
              [
                <span className="footer"><span className="para-cre">by <a href="https://www.facebook.com/chimmywnhatt/" target={"_blank"} style={{color: '#f27474'}}>Lâm&#123;&#125;</a> with <span className="love-icon"></span></span></span>,
                RHAP_UI.LOOP,
                <button aria-label="Enable shuffle" className="rhap_button-clear rhap_shuffle-button" type="button">
                  <MdOutlineShuffle />
                </button>,
                <button aria-label="Enable shuffle" className="rhap_button-clear rhap_shuffle-button-shuffle-on" id="shuffle" type="button">
                  <MdOutlineShuffleOn />
                </button>,
              ]
            }
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
        title: "Chimmyw Lo-fi Playlist", 
        html: "<div class='shortcut-des'>Cho mình 1⭐ trên <a href='https://github.com/hoangxuanlam2007/ChimmywLofiPlaylist' target='_blank' style='color: #26c6d1; text-decoration: underline !important'>github</a> nhé ^^</div><span class='shortcut-header'>Phím tắt 💻:</span></br><span class='shortcut'><span class='btnshort'><--</span>:<span class='normalshortcut'>Bài trước</span></br><span class='btnshort'>--></span>:<span class='normalshortcut'>Bài sau</span></br><span class='btnshort'>[dấu cách]</span>:<span class='normalshortcut'>Dừng/Phát nhạc</span></span>",  
        showConfirmButton: 'true',
        confirmButtonText: `Được thôi!`,
      })
        .then((result) => {
          if (result.isConfirmed) {
            document.querySelector('audio').play();
          }
      });
    }
