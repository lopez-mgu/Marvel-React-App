import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from './Components/Characters/Characters';
import Favorite from './Components/Favorite/Favorite';
import Home from './Components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='characters' element={<Characters />} />
        <Route path='favorites' element={<Favorite />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
