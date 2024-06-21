import './App.css';
import userIcon from './img/user.svg'; 
import keyboardIcon from './img/keyboard.svg';  
import logo from './img/image.jpg';  
const Menu = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo" />  
        </div>
        <a href="./home.jsx">Início</a>
        <a href="./reserva.jsx">Reservas</a>
        <a href="./caixa.jsx">Meu caixa</a>
      </div>

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
        </div>
      </div>
    </div>
  );
};

export default Menu;
