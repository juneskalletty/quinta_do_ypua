import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pagamentoService from '../services/pagamentoService';

const PagamentoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Atualize para useNavigate
  const [formData, setFormData] = useState({
    fk_id_reserva: '',
    fk_valor_total: '',
    data_pagamento: '',
    pagamento_realizado: false,
  });

  useEffect(() => {
    if (id) {
      pagamentoService.getPagamento(id)
        .then(response => setFormData(response.data))
        .catch(error => console.error('Erro ao buscar pagamento:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      pagamentoService.updatePagamento(id, formData)
        .then(() => navigate('/pagamentos')) // Atualize para navigate
        .catch(error => console.error('Erro ao atualizar pagamento:', error));
    } else {
      pagamentoService.createPagamento(formData)
        .then(() => navigate('/pagamentos')) // Atualize para navigate
        .catch(error => console.error('Erro ao criar pagamento:', error));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div>
      <h1>{id ? 'Editar Pagamento' : 'Cadastrar Novo Pagamento'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Reserva ID</label>
          <input type="number" name="fk_id_reserva" value={formData.fk_id_reserva} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Valor Total</label>
          <input type="number" name="fk_valor_total" value={formData.fk_valor_total} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Data de Pagamento</label>
          <input type="date" name="data_pagamento" value={formData.data_pagamento} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Pagamento Realizado</label>
          <input type="checkbox" name="pagamento_realizado" checked={formData.pagamento_realizado} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
};

export default PagamentoForm;
