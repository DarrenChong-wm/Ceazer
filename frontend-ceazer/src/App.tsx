import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import * as Account from './pages/';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Account.Login />} />
        <Route path="/Register" element={<Account.Register />} />
      </Routes>
    </Router>
  );
}

export default App;
