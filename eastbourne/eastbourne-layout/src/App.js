import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './Pages/Aboutus/About';
import Contactus from './Pages/Contactus/Contactus';
import Home from './Pages/Home/Home';
function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />
    </Routes>

  );
}

export default App;
