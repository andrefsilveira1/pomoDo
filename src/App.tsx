import React from 'react';
import {Routes, Route } from 'react-router-dom';
import About from './about';
import Home from './home/index'
import Learn from './learn';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/sobre" element={<About />} />
            <Route  path="/quemsou" element={<Learn />} />
        </Routes>
    </div>
  );
}

export default App;
