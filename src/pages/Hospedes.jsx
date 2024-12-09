/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import HeaderMenu from "../components/HeaderMenu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/pages/Hospedes.css";

const Hospedes = () => {
  const [newHospede, setNewHospede] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    quantidade: "",
    pagamento: "",
    quarto: "", // Inicializa vazio
    acomodacao: "",
    dataEntrada: null,
    dataSaida: null,
    valor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "valor") {
      // Converte o valor para formato de moeda
      const formattedValue = parseFloat(value.replace(/[^0-9]/g, "") || 0)
        .toFixed(2)
        .replace(".", ",");
      setNewHospede({ ...newHospede, [name]: `R$ ${formattedValue}` });
    } else {
      setNewHospede({ ...newHospede, [name]: value });
    }
  };

  const handleDateChange = (date, name) => {
    setNewHospede({ ...newHospede, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hospede adicionado:", newHospede);

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
      valor: "",
    });
  };

  return (
    <div className="container">
      <Menu />
      <div className="content">
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
                  type="number"
                  name="quantidade"
                  value={newHospede.quantidade}
                  onChange={handleChange}
                />
              </label>
              <label>
                Forma de pagamento:
                <select
                  className="input"
                  name="pagamento"
                  value={newHospede.pagamento}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="Débito">Débito</option>
                  <option value="Crédito">Crédito</option>
                  <option value="Pix">Pix</option>
                  <option value="Dinheiro">Dinheiro</option>
                </select>
              </label>
              <label>
                Serviço de quarto:
                <select
                  className="input"
                  name="quarto"
                  value={newHospede.quarto}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </label>
              <label>
                Acomodação:
                <select
                  className="input"
                  name="acomodacao"
                  value={newHospede.acomodacao}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="Chalé familia">Chalé familia</option>
                  <option value="Suíte com cozinha 1">Suíte com cozinha 1</option>
                  <option value="Cabana 1">Cabana 1</option>
                  <option value="Overlands">Overlands</option>
                  <option value="Cabana 2">Cabana 2</option>
                  <option value="Suíte com cozinha 2">Suíte com cozinha 2</option>
                  <option value="Bus">Bus</option>
                  <option value="Cabana 3">Cabana 3</option>
                </select>
              </label>
              <div className="date-row">
                <label>
                  Data de Entrada:
                  <DatePicker
                    selected={newHospede.dataEntrada}
                    onChange={(date) => handleDateChange(date, "dataEntrada")}
                    dateFormat="dd/MM/yyyy"
                    className="input-date"
                  />
                </label>
                <label>
                  Data de Saída:
                  <DatePicker
                    selected={newHospede.dataSaida}
                    onChange={(date) => handleDateChange(date, "dataSaida")}
                    dateFormat="dd/MM/yyyy"
                    className="input-date"
                  />
                </label>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Hospedes;
