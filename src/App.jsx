import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu.jsx';
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


export default App;
