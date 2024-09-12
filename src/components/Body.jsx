import React, { useState } from 'react';
import { BrowserRouter, Link, Switch, Route, Routes } from 'react-router-dom';
import { Aboutme } from './body_componets/Aboutme';
import { Videos } from './body_componets/Videos';
import { Others } from './body_componets/Others';

export const Body = () => {
    return (
        <BrowserRouter>
            <div className='Body'>
                <div className='MenuBotton'>
                    <Link to = '/aboutme'>About me</Link>
                    <Link to = '/videos'>Videos</Link>
                    <Link to = '/others'>Others</Link>
                </div>
                <Routes>
                    <Route path='/aboutme' element={<Aboutme/>}/>
                    <Route path='/videos' element={<Videos/>}/>
                    <Route path='/others' element={<Others/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}