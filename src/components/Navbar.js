import React from 'react';
import Globe from '../images/globe.svg'

export default function Navbar () {
    return (
        <div className='navbar'>
            <img src={Globe} alt='Travel Journal' />
            <h1>my travel journal.</h1>
        </div>
    )
}