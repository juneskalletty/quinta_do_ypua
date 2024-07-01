import { Link } from 'react-router-dom';
import '../style/components/Login.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuário:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>Não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
      </div>
    </div>
  );
};

export default Login;
