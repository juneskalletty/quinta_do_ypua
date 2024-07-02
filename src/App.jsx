import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Acomodacao from './pages/Acomodacao';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/acomodacao" element={<Acomodacao />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;