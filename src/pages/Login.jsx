import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/pages/Login.css';
import logo from '../img/image.jpg'; // Ajuste o caminho conforme necessário

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    // Implementar lógica de envio de senha
    alert(`Instruções para redefinir sua senha foram enviadas para: ${email}`);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    // Implementar lógica de cadastro
    alert('Cadastro realizado com sucesso!');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="login-container">
      <div className="login-side">
        <img src={logo} alt="logo" className="login-logo" />
      </div>
      <div className="login-content">
        {!showForgotPassword && !showSignup && (
          <form onSubmit={handleSubmit}>
            <h3>E-mail</h3>
            <input
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              type="email"
              value={email}
            />
            <h3>Senha</h3>
            <input
              name="password"
              placeholder="Digite sua senha"
              onChange={handleChange}
              type="password"
              value={password}
            />
            <div className="form-actions">
              <button type="submit">Entrar</button>
              <a href="#" onClick={() => setShowForgotPassword(true)}>Esqueci a senha</a>
            </div>
            <a className="signup-link" href="#" onClick={() => setShowSignup(true)}>Cadastre-se</a>
          </form>
        )}

        {showForgotPassword && (
          <form onSubmit={handleForgotPassword}>
            <h3>Esqueci a senha</h3>
            <input
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              type="email"
              value={email}
            />
            <div className="form-actions">
              <button type="submit">Enviar</button>
              <a href="#" onClick={() => setShowForgotPassword(false)}>Voltar</a>
            </div>
          </form>
        )}

        {showSignup && (
          <form onSubmit={handleSignup}>
            <h3>Cadastre-se</h3>
            <input
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              type="email"
              value={email}
            />
            <input
              name="password"
              placeholder="Digite sua senha"
              onChange={handleChange}
              type="password"
              value={password}
            />
            <div className="form-actions">
              <button type="submit">Cadastrar</button>
              <a href="#" onClick={() => setShowSignup(false)}>Voltar</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
