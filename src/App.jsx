import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu.jsx';
<<<<<<< HEAD
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

=======
import Acomodacao from './pages/Acomodacao';



const Home = () => <div>Home Component</div>;
const Reserva = () => <div>Reserva Component</div>;
const Caixa = () => <div>Caixa Component</div>;
const App = () => {
  return (
    <div className='App'>
      <Router>
      
        {/*<Acomodacao />*/}
        {/*<Menu />*/}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/caixa" element={<Caixa />} />
          <Route path="/acomodacao" element={<Acomodacao />} />
        </Routes>
      
    </Router>
    </div>
    
  );
};


>>>>>>> 145d06d0c619f76956c8e0381e8e33025406188d
export default App;
