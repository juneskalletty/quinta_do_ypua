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
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newAcomodacao, setNewAcomodacao] = useState({ title: '', name: '', dates: '', color: 'green', id: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [acomodacoes, setAcomodacoes] = useState([
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
  ]);
  const [showUserCard, setShowUserCard] = useState(false);

  const handleAcomodacaoClick = (acomodacao) => {
    if (acomodacao === 'novaacomodacao') {
      setIsFormVisible(true);
    } else {
      navigate(`/acomodacao?acomodacao=${acomodacao}`);
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleAdmin = () => {
    navigate('/admin');
  };

  const toggleUserCard = () => {
    setShowUserCard(!showUserCard);
  };

  const handleFilterClick = (color) => {
    setFilteredColor(color);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewAcomodacao({ ...newAcomodacao, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newAcomodacao.title) {
      alert("O campo 'Acomodação' não pode estar vazio.");
      return;
    }

    const existingAcomodacaoIndex = acomodacoes.findIndex(acc => acc.id === newAcomodacao.id);
    if (existingAcomodacaoIndex !== -1) {
      const updatedAcomodacoes = acomodacoes.map(acc =>
        acc.id === newAcomodacao.id ? { ...acc, title: newAcomodacao.title } : acc
      );
      setAcomodacoes(updatedAcomodacoes);
    } else {
      setAcomodacoes([...acomodacoes, { ...newAcomodacao, id: `acomodacao${acomodacoes.length + 1}` }]);
    }
    setIsFormVisible(false);
    setNewAcomodacao({ title: '', name: '', dates: '', color: 'green', id: '' });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSelect = (id) => {
    const acomodacao = acomodacoes.find(acc => acc.id === id);
    setNewAcomodacao(acomodacao);
    setSearchTerm('');
  };

  const filteredAcomodacoes = filteredColor
    ? acomodacoes.filter(acomodacao => acomodacao.color === filteredColor)
    : acomodacoes;

  const filteredSearchResults = acomodacoes.filter(acomodacao => 
    acomodacao.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Menu />
      <div className="content">
        <div className="header">
          <div className="stats">
            <button onClick={() => handleFilterClick('')}>Todos: {acomodacoes.length}</button>
            <button className="occupied" onClick={() => handleFilterClick("red")}>Ocupado: {acomodacoes.filter(acc => acc.color === "red").length}</button>
            <button className="enter-today" onClick={() => handleFilterClick("blue")}>Entra hoje: {acomodacoes.filter(acc => acc.color === "blue").length}</button>
            <button className="exit-today" onClick={() => handleFilterClick("yellow")}>Sai hoje: {acomodacoes.filter(acc => acc.color === "yellow").length}</button>
            <button className="available" onClick={() => handleFilterClick("green")}>Disponível: {acomodacoes.filter(acc => acc.color === "green").length}</button>
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
        {isFormVisible && (
          <div className="form-overlay">
            <form className="form" onSubmit={handleFormSubmit}>
              <h2>Nova Acomodação</h2>
              <label>
                Acomodação:
                <input 
                  type="text" 
                  name="title" 
                  value={newAcomodacao.title} 
                  onChange={handleFormChange} 
                />
              </label>
              <label>
                Pesquisar Acomodações:
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={handleSearchChange} 
                />
                {searchTerm && (
                  <ul className="search-results">
                    {filteredSearchResults.map(result => (
                      <li 
                        key={result.id} 
                        onClick={() => handleSearchSelect(result.id)}
                      >
                        {result.title}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
              <div className="form-buttons">
                <button type="submit">Salvar</button>
                <button type="button" onClick={() => setIsFormVisible(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;