import React from 'react';
import logo from './logo.svg';
import { Test } from './features/test/Test';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
