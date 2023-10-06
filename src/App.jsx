import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Login from './pages/login';
import HomePage from './components/HomePage/HomePage';


const App = () => {    
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


