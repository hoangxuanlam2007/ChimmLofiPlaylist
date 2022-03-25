import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-500'>Đang phát</h2>
            <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
            <br/>
            <h2 style={{marginTop: '-25px', color: 'rgb(230, 230, 230)'}} className='text-cyan-600'>{song.author}</h2>
            <div style={{marginTop: '15px'}} className='m-auto mt-10'>
                <img className='w-full' src={song.links.images[0].url} alt='Song image' />
            </div>
            <p className='comment'>-- Lo-fi with Chimmyw --</p>
        </div>
    )
}
