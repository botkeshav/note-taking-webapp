// import './App.css'
import React from 'react'
import Body from './components/Body'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard/>} />  
    </Routes>
    // <Body/>
  );
}

export default App