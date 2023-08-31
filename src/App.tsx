import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/Pokemons/:name" element={<Pokemon />} />
          <Route path="/Pokemons" element={<Pokemons />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
