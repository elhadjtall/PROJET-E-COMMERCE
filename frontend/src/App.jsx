import React, { useState } from 'react'; // Ajout de useState ici
import './App.css';
import { Outlet } from 'react-router-dom';
import NavItems from './components/NavItems';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
