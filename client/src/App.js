import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import {
  Home,
  Nosotros,
  Servicios,
  Cursos,
  Conversemos,
  LoginOrRegister,
} from './Views/index'

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
        <Route path='/loginOrRegister' element={<LoginOrRegister />} />
      </Routes>
    </div>
  );
}

export default App;