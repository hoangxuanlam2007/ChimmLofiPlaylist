import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };
  useEffect(() => {
    setidSong(song.id)
    document.getElementsByClassName("text-teal-400")[0].scrollIntoView({block: 'center', behavior: 'smooth'})
  }, [song])
  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full" style={{whiteSpace: 'nowrap'}}>
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Tên bài hát</th>
            <th className="w-[10%]">Tác giả</th>
            <th className="w-[10%]"><i class="fa fa-download"></i></th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400'}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td className="song-name">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
