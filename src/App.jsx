import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Login from './components/Login';
import Cadastro from './components/Cadastro';

// Componentes para as rotas do primeiro exemplo
const Home = () => <div>Home Component</div>;
const Reserva = () => <div>Reserva Component</div>;
const Caixa = () => <div>Caixa Component</div>;

function App() {
  return (
    <Router>
      <div>
        {/* Componente Menu comum a ambos os exemplos */}
        <Menu />

        {/* Roteamento para as rotas do primeiro exemplo */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/caixa" element={<Caixa />} />
        </Routes>

        {/* Roteamento para as rotas do segundo exemplo */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          {/* Rota padrão para o Menu, ajuste conforme necessário */}
          <Route path="/" component={Menu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
