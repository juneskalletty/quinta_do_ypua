/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import HeaderMenu from '../components/HeaderMenu';
import userIcon from '../img/user.svg';
import keyboardIcon from '../img/keyboard.svg';
import '../style/pages/Home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const [filteredColor, setFilteredColor] = useState('');
  
  const handleAcomodacaoClick = (acomodacao) => {
    navigate(`/acomodacao?acomodacao=${acomodacao}`);
  };

  const handleFilterClick = (color) => {
    setFilteredColor(color);
  };

  const acomodacoes = [
    { title: "Chalé familia", name: "Maria da Silva", dates: "03/04/2024 - 07/04/2024", color: "red", id: "cabana1" },
    { title: "Suíte com cozinha 1", name: "João Alberto Rodrigues", dates: "03/04/2024 - 07/04/2024", color: "red", id: "suitecomcozinha1" },
    { title: "Cabana 1", name: "Gabriel Mendes Moura", dates: "03/04/2024 - 07/04/2024", color: "red", id: "cabana1" },
    { title: "Overlands", name: "Rafael Oliveiros", dates: "03/04/2024 - 07/04/2024", color: "blue", id: "overlands1" },
    { title: "Cabana 2", name: "Joana Soares", dates: "03/04/2024 - 07/04/2024", color: "blue", id: "cabana2" },
    { title: "Overlands", name: "Fernanda Nogueira", dates: "03/04/2024 - 07/04/2024", color: "yellow", id: "overlands2" },
    { title: "Suíte com cozinha 2", name: "José Martins", dates: "03/04/2024 - 07/04/2024", color: "yellow", id: "suitecomcozinha2" },
    { title: "Bus", name: "", dates: "", color: "green", id: "bus" },
    { title: "Overlands", name: "", dates: "", color: "green", id: "overlands3" },
    { title: "Cabana 3", name: "", dates: "", color: "green", id: "cabana3" },
    { title: "Nova Acomodação", name: "", dates: "", color: "green", id: "novaacomodacao" },
  ];

  const filteredAcomodacoes = filteredColor
    ? acomodacoes.filter(acomodacao => acomodacao.color === filteredColor)
    : acomodacoes;

  return (
    <div className="container">
      <Menu />
      <div className="content">
        <div className="header">
          <div className="stats">
            <button onClick={() => handleFilterClick('')}>Todos: 10</button>
            <button className="occupied" onClick={() => handleFilterClick("red")}>Ocupado: 3</button>
            <button className="enter-today" onClick={() => handleFilterClick("blue")}>Entra hoje: 2</button>
            <button className="exit-today" onClick={() => handleFilterClick("yellow")}>Sai hoje: 2</button>
            <button className="available" onClick={() => handleFilterClick("green")}>Disponível: 3</button>
            
          </div>
          <div className="user-info">
            <img src={userIcon} alt="user" />
            <img src={keyboardIcon} alt="keyboard" />
          </div>
        </div>
        <div className="separator"></div>
        <div className="home-content">
          <div className="cards-container">
            {filteredAcomodacoes.map((item, index) => (
              <div 
                key={index} 
                className={`card ${item.color} ${!item.name && !item.dates ? 'add-reserva' : ''}`} 
                onClick={() => handleAcomodacaoClick(item.id)}
              >
                <div className="card-title">{item.title}</div>
                <div className="card-content">
                  {item.name && <div className="card-name">{item.name}</div>}
                  {item.name && <div className="divider"></div>}
                  {item.dates && <div className="card-dates">{item.dates}</div>}
                  {!item.name && !item.dates && <div className="card-add">Adicionar reserva +</div>}
                </div>
              </div>
            ))}
            {filteredAcomodacoes.length % 4 !== 0 && <div className="empty-block"></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
