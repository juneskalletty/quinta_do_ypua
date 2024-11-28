/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Menu from "../components/Menu";
import HeaderMenu from "../components/HeaderMenu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import "../style/pages/Hospedes.css";

const Hospedes = () => {
  const [hospedes, setHospedes] = useState([]);
  const [newHospede, setNewHospede] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    quantidade: "",
    pagamento: "",
    quarto: "",
    acomodacao: "",
    dataEntrada: null,
    dataSaida: null,
    status: "",
    valor: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedHospede, setSelectedHospede] = useState(null);
  const openModal = (hospede) => {
    setSelectedHospede(hospede);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedHospede(null);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHospede({ ...newHospede, [name]: value });
  };

  const handleDateChange = (date, name) => {
    setNewHospede({ ...newHospede, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hospede adicionado:", newHospede);
    setHospedes([...hospedes, newHospede]);
    setNewHospede({
      nome: "",
      cpf: "",
      telefone: "",
      quantidade: "",
      pagamento: "",
      quarto: "",
      acomodacao: "",
      dataEntrada: null,
      dataSaida: null,
      status: "",
      valor: "",
    });
  };
  const getStatusClass = (hospede) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const entrada = hospede.dataEntrada
      ? new Date(hospede.dataEntrada).setHours(0, 0, 0, 0)
      : null;
    const saida = hospede.dataSaida
      ? new Date(hospede.dataSaida).setHours(0, 0, 0, 0)
      : null;
    if (entrada === today) {
      return "chegando";
    } else if (entrada && entrada > today) {
      return "a-chegar";
    } else if (saida === today) {
      return "saindo";
    } else if (entrada && entrada < today && (!saida || saida >= today)) {
      return "na-pousada";
    } else {
      return "";
    }
  };

  return (
    <div className="container">
      <Menu />
      <div className="content">
        <HeaderMenu />
        <div className="hospedes-content">
          <div className="hospedes-form">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  className="input"
                  type="text"
                  name="nome"
                  value={newHospede.nome}
                  onChange={handleChange}
                />
              </label>
              <label>
                CPF:
                <input
                  className="input"
                  type="text"
                  name="cpf"
                  value={newHospede.cpf}
                  onChange={handleChange}
                />
              </label>
              <label>
                Telefone:
                <input
                  className="input"
                  type="text"
                  name="telefone"
                  value={newHospede.telefone}
                  onChange={handleChange}
                />
              </label>
              <label>
                Quantidade de pessoas:
                <input
                  className="input"
                  type="text"
                  name="quantidade"
                  value={newHospede.quantidade}
                  onChange={handleChange}
                />
              </label>
              <label>
                Forma de pagamento:
                <input
                  className="input"
                  type="text"
                  name="pagamento"
                  value={newHospede.pagamento}
                  onChange={handleChange}
                />
              </label>
              <label>
                Serviço de quarto:
                <input
                  className="input"
                  type="text"
                  name="quarto"
                  value={newHospede.quarto}
                  onChange={handleChange}
                />
              </label>
              <label>
                Acomodação:
                <select
                  className="select-acomodação"
                  name="acomodacao"
                  value={newHospede.acomodacao}
                  onChange={handleChange}
                >
                  <option value="Chalé familia">Chalé familia</option>
                  <option value="Suíte com cozinha 1">
                    Suíte com cozinha 1
                  </option>
                  <option value="Cabana 1">Cabana 1</option>
                  <option value="Overlands">Overlands</option>
                  <option value="Cabana 2">Cabana 2</option>
                  <option value="Suíte com cozinha 2">
                    Suíte com cozinha 2
                  </option>
                  <option value="Bus">Bus</option>
                  <option value="Cabana 3">Cabana 3</option>
                  <option value="Nova Acomodação">Nova Acomodação</option>
                </select>
              </label>
              <label>
                Data de Entrada:
                <DatePicker
                  selected={newHospede.dataEntrada}
                  onChange={(date) => handleDateChange(date, "dataEntrada")}
                  dateFormat="dd/MM/yyyy"
                />
              </label>
              <label>
                Data de Saída:
                <DatePicker
                  selected={newHospede.dataSaida}
                  onChange={(date) => handleDateChange(date, "dataSaida")}
                  dateFormat="dd/MM/yyyy"
                />
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={newHospede.status}
                  onChange={handleChange}
                >
                  <option value="Ocupado">Ocupado</option>
                  <option value="Disponível">Disponível</option>
                  <option value="Em limpeza">Em limpeza</option>
                </select>
              </label>
              <label>
                Valor:
                <input
                  className="input"
                  type="text"
                  name="valor"
                  value={newHospede.valor}
                  onChange={handleChange}
                />
              </label>
              <div className="div-btn">
                <button className="btn-hospedes" type="submit">
                  Adicionar
                </button>
              </div>
            </form>
          </div>
          <div className="cards-container">
            <div className="card-group">
              <h2>Na Pousada</h2>
              {hospedes
                .filter((hospede) => getStatusClass(hospede) === "na-pousada")
                .map((hospede, index) => (
                  <div key={index} className="card na-pousada">
                    <div className="card-title">{hospede.nome}</div>
                    <div className="card-content">
                      <div className="card-dates">
                        Entrada:{" "}
                        {hospede.dataEntrada
                          ? new Date(hospede.dataEntrada).toLocaleDateString()
                          : ""}
                      </div>
                      <div className="card-dates">
                        Saída:{" "}
                        {hospede.dataSaida
                          ? new Date(hospede.dataSaida).toLocaleDateString()
                          : ""}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="card-group">
              <h2>Chegando Hoje</h2>
              {hospedes
                .filter((hospede) => getStatusClass(hospede) === "chegando")
                .map((hospede, index) => (
                  <div key={index} className="card chegando">
                    <div className="card-title">{hospede.nome}</div>
                    <div className="card-content">
                      <div className="card-dates">
                        Entrada:{" "}
                        {hospede.dataEntrada
                          ? new Date(hospede.dataEntrada).toLocaleDateString()
                          : ""}
                      </div>
                      <div className="card-dates">
                        Saída:{" "}
                        {hospede.dataSaida
                          ? new Date(hospede.dataSaida).toLocaleDateString()
                          : ""}
                      </div>
                    </div>{" "}
                  </div>
                ))}
            </div>
            <div className="card-group">
              <h2>Saindo Hoje</h2>
              {hospedes
                .filter((hospede) => getStatusClass(hospede) === "saindo")
                .map((hospede, index) => (
                  <div key={index} className="card saindo">
                    <div className="card-title">{hospede.nome}</div>
                    <div className="card-content">
                      <div className="card-dates">
                        Entrada:{" "}
                        {hospede.dataEntrada
                          ? new Date(hospede.dataEntrada).toLocaleDateString()
                          : ""}
                      </div>
                      <div className="card-dates">
                        Saída:{" "}
                        {hospede.dataSaida
                          ? new Date(hospede.dataSaida).toLocaleDateString()
                          : ""}
                      </div>
                    </div>{" "}
                  </div>
                ))}
            </div>
            <div className="card-group">
              <h2>A Chegar</h2>
              {hospedes
                .filter((hospede) => getStatusClass(hospede) === "a-chegar")
                .map((hospede, index) => (
                  <div key={index} className="card a-chegar">
                    <div className="card-title">{hospede.nome}</div>
                    <div className="card-content">
                      <div className="card-dates">
                        Entrada:{" "}
                        {hospede.dataEntrada
                          ? new Date(hospede.dataEntrada).toLocaleDateString()
                          : ""}
                      </div>
                      <div className="card-dates">
                        Saída:{" "}
                        {hospede.dataSaida
                          ? new Date(hospede.dataSaida).toLocaleDateString()
                          : ""}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospedes;
