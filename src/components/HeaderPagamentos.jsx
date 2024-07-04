/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../style/components/HeaderPagamentos.css'

const HeaderPagamentos = ({ setFilter, pagamentos }) => {
    return (
      <div className="header-pagamentos">
        <button onClick={() => setFilter('todos')} className="todos">Todos: {pagamentos.length}</button>
        <button onClick={() => setFilter('pagos')} className="pagos">Pagos</button>
        <button onClick={() => setFilter('naoPagos')} className="naoPagos">Em aberto</button>
      </div>
    );
  };
  
  export default HeaderPagamentos;