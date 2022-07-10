import React from 'react';
import logo from './logo.svg';
import { Test } from './pages/Test';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddQuestion from './pages/AddQuestion';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="question" element={<AddQuestion/>} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
