import React from 'react';
import './App.css';
// import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ucitaj from './Ucitaj';
import Dodaj from './Dodaj'


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
