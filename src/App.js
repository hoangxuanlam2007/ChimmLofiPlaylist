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
import HashLoader from "react-spinners/HashLoader";
function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
      setTimeout(() => {
        setLoading(false)
        welcome();
      }, 3000);
  }, [])

  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }

  return (
    <div className="App">
      <HashLoader color={'#363FD7'} loading={loading} size={100} />
      <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
