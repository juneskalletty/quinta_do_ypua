import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Acomodacao from './pages/Acomodacao';
import Home from './pages/Home';
import Admin from './pages/Admin'; 
import Login from './pages/Login';
import Pagamento from './pages/Pagamento';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/acomodacao" element={<Acomodacao />} />
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/meu-caixa" element={<Pagamento />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;