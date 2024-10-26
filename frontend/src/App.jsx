import React, { useState } from 'react'; // Ajout de useState ici
import './App.css';
import { Outlet } from 'react-router-dom';
import NavItems from './components/NavItems';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavItems />
      <Outlet />
    </>
  );
}

export default App;
