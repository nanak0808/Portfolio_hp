import React, { useState } from 'react';
import { BrowserRouter, Link, Switch, Route, Routes } from 'react-router-dom';
import { Aboutme } from './body_componets/Aboutme';
import { Videos } from './body_componets/Videos';
import { Others } from './body_componets/Others';
import './Body.css';

export const Body = () => {
    return (
        // <BrowserRouter>
            <div className='body'>
                {/* <div className='menuBotton'>
                    <Link to = '/' className='botton'>About me</Link>
                    <Link to = '/videos' className='botton'>Videos</Link>
                    <Link to = '/others'className='botton'>Others</Link>
                </div>
                <Routes>
                    <Route path='/' element={<Aboutme/>}/>
                    <Route path='/videos' element={<Videos/>}/>
                    <Route path='/others' element={<Others/>}/>
                </Routes> */}
                <Aboutme/>
                <Videos/>
            </div>
        // </BrowserRouter>
    )
}