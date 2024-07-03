/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userIcon from '../img/user.svg';
import keyboardIcon from '../img/keyboard.svg';
import '../style/components/Menu.css'; 

const HeaderMenu = () => {
  const [showUserCard, setShowUserCard] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const handleAdmin = () => {
    navigate('/admin');
  };

  const toggleUserCard = () => {
    setShowUserCard(!showUserCard);
  };

  return (
    <div className="main-content">
      <div className="content">
        <div className="header">
          <div className="stats">
            <button>Todos: 10</button>
            <button className="available">Disponível: 3</button>
            <button className="occupied">Ocupado: 3</button>
            <button>Em limpeza: 0</button>
            <button className="enter-today">Entra hoje: 2</button>
            <button className="exit-today">Sai hoje: 2</button>
          </div>
          <div className="user-info">
            <img src={userIcon} alt="user" />
            <img src={keyboardIcon} alt="keyboard" onClick={toggleUserCard} style={{ cursor: 'pointer' }} />
            {showUserCard && (
              <div className="user-card">
                <p>Usuário Logado</p>
                <a onClick={handleAdmin}>Administrador</a>
                <a onClick={handleLogout}>Sair</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
