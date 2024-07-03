import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Acomodacao from './pages/Acomodacao';
import Home from './pages/Home';
import MeuCaixa from './pages/MeuCaixa';
import PagamentoDetalhe from './components/PagamentoDetalhe';
import PagamentoForm from './components/PagamentoForm';
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/acomodacao" element={<Acomodacao />} />
          <Route path="/Meucaixa" element={<MeuCaixa />} />
          <Route path="/pagamentos/novo" component={<PagamentoForm />} />
          <Route path="/pagamentos/:id/editar" component={<PagamentoForm />} />
          <Route path="/pagamentos/:id" component={<PagamentoDetalhe />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
