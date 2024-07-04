/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Menu from '../components/Menu';
import HeaderMenu from '../components/HeaderMenu';
import '../style/pages/Hospedes.css';

const Hospedes = () => {
  const [hospedes, setHospedes] = useState([]);
  const [newHospede, setNewHospede] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    quantidade: '',
    pagamento: '',
    quarto: '',
    acomodacao: '',
    data: '',
    status: '',
    valor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHospede({ ...newHospede, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hospede adicionado:', newHospede);
    setHospedes([...hospedes, newHospede]);
    setNewHospede({
      nome: '',
      cpf: '',
      telefone: '',
      quantidade: '',
      pagamento: '',
      quarto: '',
      acomodacao: '',
      data: '',
      status: '',
      valor: '',
    });
  };

  console.log('Renderizando página de Hospedes');

  return (
    <div className="container">
      <Menu />
      <div className="content">
        <HeaderMenu />
        <div className="hospedes-content">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" name="nome" value={newHospede.nome} onChange={handleChange} />
              </label>
              <label>
                CPF:
                <input type="text" name="cpf" value={newHospede.cpf} onChange={handleChange} />
              </label>
              <label>
                Telefone:
                <input type="text" name="telefone" value={newHospede.telefone} onChange={handleChange} />
              </label>
              <label>
                Quantidade de pessoas:
                <input type="text" name="quantidade" value={newHospede.quantidade} onChange={handleChange} />
              </label>
              <label>
                Forma de pagamento:
                <input type="text" name="pagamento" value={newHospede.pagamento} onChange={handleChange} />
              </label>
              <label>
                Serviço de quarto:
                <input type="text" name="quarto" value={newHospede.quarto} onChange={handleChange} />
              </label>
              <label>
                Acomodação:
                <select name="acomodacao" value={newHospede.acomodacao} onChange={handleChange}>
                  <option value="Chalé familia">Chalé familia</option>
                  <option value="Suíte com cozinha 1">Suíte com cozinha 1</option>
                  <option value="Cabana 1">Cabana 1</option>
                  <option value="Overlands">Overlands</option>
                  <option value="Cabana 2">Cabana 2</option>
                  <option value="Suíte com cozinha 2">Suíte com cozinha 2</option>
                  <option value="Bus">Bus</option>
                  <option value="Overlands">Overlands</option>
                  <option value="Cabana 3">Cabana 3</option>
                  <option value="Nova Acomodação">Nova Acomodação</option>
                </select>
              </label>
              <label>
                Data:
                <input type="text" name="data" value={newHospede.data} onChange={handleChange} />
              </label>
              <label>
                Status:
                <select name="status" value={newHospede.status} onChange={handleChange}>
                  <option value="Ocupado">Ocupado</option>
                  <option value="Disponível">Disponível</option>
                  <option value="Em limpeza">Em limpeza</option>
                </select>
              </label>
              <label>
                Valor:
                <input type="text" name="valor" value={newHospede.valor} onChange={handleChange} />
              </label>
              <button type="submit">Adicionar</button>
            </form>
          </div>
          <div className="cards-container">
            {hospedes.map((hospede, index) => (
              <div key={index} className={`card ${hospede.status.toLowerCase()}`}>
                <div className="card-title">{hospede.nome}</div>
                <div className="card-content">
                  <div className="card-name">{hospede.cpf}</div>
                  <div className="divider"></div>
                  <div className="card-dates">{hospede.telefone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospedes;
