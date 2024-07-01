import { Link } from 'react-router-dom';
import '../style/components/Cadastro.css'; 

const Cadastro = () => {
  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Cadastro</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirmar Senha:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
      </div>
    </div>
  );
};

export default Cadastro;
