import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Usuario from './components/Usuario';
import Acomodacao from './components/Acomodacao';
import Hospede from './components/Hospede';
import Pagamento from './components/Pagamento';
import Reserva from './components/Reserva';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/acomodacoes" element={<Acomodacao />} />
        <Route path="/hospedes" element={<Hospede />} />
        <Route path="/pagamentos" element={<Pagamento />} />
        <Route path="/reservas" element={<Reserva />} />
      </Routes>
    </Router>
  );
};

export default App;
