import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PasswordRseset from './Components/PasswordRseset';
import TerrmsAndConditions from './Components/TerrmsAndConditions';
import About from './Pages/About';
import Faq from './Pages/Faq';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<PasswordRseset />} />
      <Route path="/terms" element={<TerrmsAndConditions />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App

