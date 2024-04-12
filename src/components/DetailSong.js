import React, { useContext } from 'react';
import { Songs } from '../Context';

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500' style={{marginBottom: '5px'}}>Đang phát</h2>
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <br/>
            <h2 style={{marginTop: '-20px', color: 'rgb(230, 230, 230)'}} className='text-cyan-600'>{song.author}</h2>
            <div style={{margin: '15px 0 15px 0'}} className='m-auto mt-10'>
                <img className='w-full' src={song.links.images[0].url} />
            </div>
            <p className="cre"><span className="p-cre">Hand-crafted with <span className="love-icon"></span> by <a href="https://www.facebook.com/chimmywnhatt/" target={"_blank"} style={{color: '#f27474'}}>Lâm</a></span></p>
        </div>
    )
}
