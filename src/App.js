// Made by Chimmyw
import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import {welcome} from "./components/Playing";
import { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.getElementsByClassName('App')[0].style.display = 'none';
      setTimeout(() => {
        function loveDateFooter() { //loveDate Counter
          var today = new Date();
          var date_to_reply = new Date('2021-11-13');
          var timeinmilisec = date_to_reply.getTime() - today.getTime();
          var loveDay = Math.abs(Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)));
          var output = document.getElementById("sp-footer");
          output.innerHTML = ' ' + loveDay;
        }
        loveDateFooter();
        setLoading(false);
        window.scrollTo(0, 0);
        document.getElementsByClassName('App')[0].style.display = 'block';
        welcome();
      }, 3000);
  }, [])

  // Find the window height - Fix iOS Safari 100vh bug
  const windowHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--window-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', windowHeight);
  windowHeight();

  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }

  return (
    <div>
      <div className="loading-container" style={{overflow:'hidden', transition:'none', verticalAlign: 'center', transform: 'none'}}>
        <PuffLoader color={'#14bbe7'} loading={loading} size={100}/>
      </div>

      <div className="App">

        <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
          <Navbar />
          <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
            {/* span 1 */}
            <DetailSong />
            {/* span 2 */}
            <ListSongs />
          </div>
          <Playing/>
          <div>
            <p className='comment-ribbon-footer' style={{display: 'none'}}>&#127872;&nbsp;
              <span className='comment'> We've been falling in love for<span className='sp-footer' id='sp-footer'>
                </span>&nbsp;days&nbsp;&#10024;</span> &#127872;
            </p>
          </div>
        </Songs.Provider>

      </div>

    </div>
  );
}

export default App;