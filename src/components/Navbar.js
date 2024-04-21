import React from 'react'

export default function Navbar() {
    return (
        <div className='h-24 bg-slate-900 text-white text-center leading-[6rem] text-3xl'>

            <div className='div-comment hidden opacity-0'>
                <p className='comment-ribbon-footer' style={{display: 'none'}}>&#127872;&nbsp;
                    <span className='p-footer-ribbon'>hmmmm</span>
                    <span className='sp-footer' id='sp-footer'></span>
                    <span className='p-footer-ribbon'>&#10024;</span>
                    &#127872;
                </p>
            </div>

            <span id='nav-element' style={{fontSize: '28px', lineHeight: '28px'}}>
                <a href='/'>
                    <img style={{height: '40px', lineHeight: '28px', display: 'inline', margin: '-3px 10px 0 0'}} src='/favicon.ico' alt='ChimmLofiPlaylistLogo'></img>
                    Chimm Lo-fi Playlist
                </a>
            </span>
        </div>
    )
}
