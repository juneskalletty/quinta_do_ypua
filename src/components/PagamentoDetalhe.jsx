import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import pagamentoService from '../services/pagamentoService';

const PagamentoDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pagamento, setPagamento] = useState(null);

  useEffect(() => {
    pagamentoService.getPagamento(id)
      .then(response => setPagamento(response.data))
      .catch(error => console.error('Erro ao buscar pagamento:', error));
  }, [id]);

  const handleDelete = () => {
    pagamentoService.deletePagamento(id)
      .then(() => navigate('/pagamentos')) 
      .catch(error => console.error('Erro ao excluir pagamento:', error));
  };

  if (!pagamento) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Detalhes do Pagamento</h1>
      <p>Data de Pagamento: {pagamento.data_pagamento}</p>
      <p>Valor: {pagamento.fk_valor_total}</p>
      <p>Pagamento Realizado: {pagamento.pagamento_realizado ? 'Sim' : 'Não'}</p>
      <Link to={`/pagamentos/${id}/editar`} className="btn btn-primary">Editar</Link>
      <button className="btn btn-danger" onClick={handleDelete}>Excluir</button>
      <Link to="/pagamentos" className="btn btn-secondary">Voltar</Link>
    </div>
  );
};

export default PagamentoDetalhe;
