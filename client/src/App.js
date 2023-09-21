import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Nosotros from './Views/Nosotros/Nosotros';
import Servicios from './Views/Servicios/Servicios';
import Cursos from './Views/Cursos/Cursos';
import Conversemos from './Views/Conversemos/Conversemos';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/nosotros' element= {<Nosotros />} />
        <Route path='/servicios' element= {<Servicios />} />
        <Route path='/cursos' element= {<Cursos />} />
        <Route path='/contacto' element= {<Conversemos />} />
      </Routes>
    </div>
  );
}

export default App;