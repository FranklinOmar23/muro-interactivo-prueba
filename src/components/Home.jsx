// src/components/Home.js
import React from 'react';

const Home = ({ correoUsuario }) => {
  return (
    <div>
      <h2>Bienvenido {correoUsuario}</h2>
      {/* Aquí puedes agregar más lógica para la página de inicio */}
    </div>
  );
};

export default Home;
