import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Reservation from './pages/Reservation';
import MenuOpener from './components/MenuOpener';
import Navbar from './components/Navbar';
import Splash from './pages/Splash';

function App() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <MenuOpener open={open} toggleMenu={toggleMenu} />
      <Navbar open={open} />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </div>
  );
}

export default App;
