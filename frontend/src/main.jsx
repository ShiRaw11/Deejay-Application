import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login';
import LandingPage, { MailList, Videos } from './pages/landgingPage';
import Music from './pages/music';
import './index.css'
import FirstPage from './pages/eldo';
import Photos from './pages/photos';
import UserList from './pages/list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VideosPage } from './pages/video';
import Events from './pages/goo';
import Biography from './pages/Biography';
import EventForm from './components/common/djpanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/list' element={<UserList/>} />
        <Route path='/addevent' element={<EventForm/>} />
        <Route path='/video' element={<VideosPage/>} />
       <Route path='/events' element={<Events/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/biography' element={<Biography/>}/>
        <Route path='/mail' element={<MailList/>}/>
        <Route path='/photos' element={<Photos/>}/>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);