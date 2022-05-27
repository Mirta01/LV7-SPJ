import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ucitaj from './Ucitaj';
import Dodaj from './Dodaj'
//import Azuriraj from './Azuriraj'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dodaj" element={<Dodaj/>}/>
        <Route path="/" element={<Ucitaj/>}/>
       
      </Routes>
  </Router>
  );
}

export default App;
// //<Route path="/azuriraj" element={<Azuriraj/>}/>