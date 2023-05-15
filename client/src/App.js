import React from 'react';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom'
import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Join />} />
        <Route path='/chat' element={<Chat />} />
        {/* chat routes using useParams (url parameters) */}
        <Route path='/chat/:room/:name' element={<Chat />} />

        {/* for error loading path */}
        <Route path='*' element={<Navigate to='/' />} />
        
      </Routes> 
    </div>
  );
}

export default App;
