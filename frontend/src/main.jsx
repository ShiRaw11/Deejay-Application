import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login';
import LandingPage, { MailList, Videos } from './pages/landgingPage';
import Music from './pages/music';
import './index.css'
import FirstPage from './pages/eldo';

import UserList from './pages/list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VideosPage } from './pages/video';
import EventsPage from './pages/events';
import Biography from './pages/Biography';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/list' element={<UserList/>} />
        <Route path='/video' element={<VideosPage/>} />
       <Route path='/events' element={<EventsPage/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/biography' element={<Biography/>}/>
        <Route path='/mail' element={<MailList/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);