import React, { useState } from 'react'; // Ajout de useState ici
import './App.css';
import { Outlet } from 'react-router-dom';
import NavItems from './components/NavItems';
import Footer from './components/Footer';
import Shop from './shop/Shop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavItems />
      {/* ce code affiche le contenu de la page avec une hauteur minimale, ce code viens du bootstrap */}
      <div className='min-vh-100'> 
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
