import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

// Icons
import { BsSortDownAlt } from "react-icons/bs";
import { BsTextLeft } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";
import { FaCompactDisc } from "react-icons/fa";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };

  // ---------------------------------------- //
  // Kill the funky svg path that make the 
  // transfrom animation works incorrectly 
  // (incorrect center point).
  function killFunkySVG() {
    var incorrectPathPoint = /[achlmrqstv]/ig,
        paths = document.querySelectorAll("path"),
        i = paths.length,
        commands;

    while (--i > -1) {
        commands = (paths[i].getAttribute("d") + "").match(incorrectPathPoint);
        if (commands && commands.length < 2) {
            console.log("found bad path: ", paths[i]);
            paths[i].parentNode.removeChild(paths[i]);
        }
    }
  }
  window.onload = function() { //load this function onload
    killFunkySVG();
  }
  // ---------------------------------------- //

  useEffect(() => {
    setidSong(song.id)
  }, [song])
  return (
    <div className="col-span-2  overflow-y-scroll  overflow-x-hidden">
      <table className="table-auto w-full" style={{whiteSpace: 'nowrap'}}>
        <thead className="text-white h-12">
          <tr>
            <th className="text-left" style={{fontSize: '22px'}}><BsSortDownAlt /></th>
            <th className="text-left"><BsTextLeft style={{fontSize: '20px', display: 'inline-block', margin: '-3px 3px 0 0'}} /> Tên bài hát</th>
            <th className="w-[10%]"><BsPeopleFill style={{display: 'inline-block', margin: '-3px 3px 0 0'}} /> Tác giả / nghệ sĩ</th>
            <th className="w-[10%]" style={{fontSize: '20px'}}><IoMdMusicalNote style={{margin: '-3px auto auto auto',}} /></th>
          </tr>
        </thead>
        <tbody>
          {/* Fix top list for mobile view */}
          <tr className="fix-list-top" style={{display: 'none', height: '96px', borderBottom: 'none'}}></tr>

            {/* List start */}
            {DataSongs.map((song, index) => (
              <tr
                key={index}
                className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
                onClick={() => handlePlaySong(song.id)}
              >
                <td className="text-center" style={{borderBottom: 'none', textAlign: 'left'}}>{index + 1}</td>
                <td className="song-name" id="song-name">{song.name}</td>
                <td className="text-center" id="song-author">{song.author}</td>
                <td className="text-center"><FaCompactDisc style={{margin: '-3px auto auto auto', fontSize: '20px'}} /></td>
              </tr>
            ))}
            {/* List end */}
        </tbody>
      </table>
    </div>
  );
}
