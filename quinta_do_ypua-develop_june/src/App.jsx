import React from 'react';
import './App.css';
import '/vite.svg';

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src="img/image 2.png" alt="" />
      </div>
      <a href="./home.html">Início</a>
      <a href="./hospede.html">Hóspedes</a>
      <a href="./caixa.html">Meu caixa</a>
    </div>
  );
};

export default Menu;
