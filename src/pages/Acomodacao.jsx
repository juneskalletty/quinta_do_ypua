import React from 'react';
import '../style/pages/Acomodacao.css'; // Certifique-se de que o caminho para o CSS está correto
import userIcon from '../img/user.svg';
import keyboardIcon from '../img/keyboard.svg';
import Menu from '../components/Menu';

const Acomodacao = () => {
  return (
    <div>
      <Menu />
      <div className="container">
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
                <img src={keyboardIcon} alt="keyboard" />
              </div>
            </div>
            {/* Adicione mais conteúdo da página Acomodacao aqui */}
          </div>
        </div>
        <button className="cabana-button">Cabana 1</button>
      </div>
    </div>
  );
};

export default Acomodacao;
