import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <Router>
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
