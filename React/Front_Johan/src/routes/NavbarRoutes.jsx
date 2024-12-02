import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // Verifica que "Home.jsx" existe y su nombre está en mayúsculas
import Cursos from './pages/Cursos/Cursos'; // Verifica que este archivo también existe
import Usuarios from './pages/Usuarios/Usuarios'; // Ajuste de mayúscula inicial en "Usuarios"
import MasInformacion from './pages/MasInformacion/MasInformacion'; // Ajuste de mayúscula inicial

const NavbarRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/mas-informacion" element={<MasInformacion />} />
    </Routes>
  );
};

export default NavbarRoutes;
