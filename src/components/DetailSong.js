import React, { useContext } from 'react';
import { Songs } from '../Context';

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

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500'>Đang phát</h2>
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <br/>
            <h2 style={{marginTop: '-25px', color: 'rgb(230, 230, 230)'}} className='text-cyan-600'>{song.author}</h2>
            <div style={{margin: '15px 0 15px 0'}} className='m-auto mt-10'>
                <img className='w-full' src={song.links.images[0].url} alt='Song img' />
            </div>
            <p className='comment-ribbon'>&#127872; <span className='comment'>We've been falling in love for<span className='sp' id='sp'></span>&nbsp;days&nbsp;&#10024;</span> &#127872;</p>
        </div>
    )
}
