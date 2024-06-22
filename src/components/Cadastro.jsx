import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Cadastro.css'; // Estilo do componente de cadastro

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do usuário para o backend
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    // Redirecionar para a página de login após o cadastro
    history.push('/login');
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Telefone:</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
