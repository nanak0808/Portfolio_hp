import React from 'react';
import './Header.css'

export const Header = () => {
    return (
        <div className='header'>
            <img src='./camera.jpeg' alt='Logo' className='header-img'/>
            <div className='text'>
                <h1>NANAKA KIDO</h1>
                <h4>Video Creator</h4>
            </div>
        </div>
    )
}