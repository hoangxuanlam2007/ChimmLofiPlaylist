import React from 'react'

export default function Navbar() {
    return (
        <div className='h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl'>
            <span style={{fontSize: '28px', lineHeight: '28px'}}>
                <img style={{height: '40px', lineHeight: '28px', display: 'inline', margin: '-3px 10px 0 0'}} src='/favicon.ico'></img>
                Chimmyw Lo-fi Playlist
            </span>
        </div>
    )
}
