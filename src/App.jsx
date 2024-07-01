import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu.jsx';
import Home from './pages/Home.jsx';

const Reserva = () => <div>Reserva Component</div>;
const Caixa = () => <div>Caixa Component</div>;

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/caixa" element={<Caixa />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
