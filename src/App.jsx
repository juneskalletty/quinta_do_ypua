import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Acomodacao from './pages/Acomodacao';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Pagamento from './pages/Pagamento';
import Hospedes from './pages/Hospedes';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/acomodacao" element={<Acomodacao />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/meu-caixa" element={<Pagamento />} />
      <Route path="/hospedes" element={<Hospedes />} />
    </Routes>
  );
};

export default App;
