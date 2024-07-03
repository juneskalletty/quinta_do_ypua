import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pagamentoService from '../services/pagamentoService';

const MeuCaixa = () => {
  const [pagamentos, setPagamentos] = useState([]);

  useEffect(() => {
    pagamentoService.getPagamentos()
      .then(response => setPagamentos(response.data))
      .catch(error => console.error('Erro ao buscar pagamentos:', error));
  }, []);

  return (
    <div>
      <h1>Meu Caixa</h1>
      <Link to="/pagamentos/novo" className="botaoMeuCaixa">Cadastrar Novo Pagamento</Link>
      <table className="tabelaMeuCaixa">
        <thead>
          <tr>
            <th>Data de Pagamento</th>
            <th>Valor</th>
            <th>Pagamento Realizado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pagamentos.map(pagamento => (
            <tr key={pagamento.id_pagamento}>
              <td>{pagamento.data_pagamento}</td>
              <td>{pagamento.fk_valor_total}</td>
              <td>{pagamento.pagamento_realizado ? 'Sim' : 'Não'}</td>
              <td>
                <Link to={`/pagamentos/${pagamento.id_pagamento}`} className="btn btn-secondary">Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeuCaixa;
