import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

const getPagamentos = () => axios.get(`${API_URL}/consultar_pagamentos`);

const getPagamento = (id) => axios.get(`${API_URL}/consultar_pagamentos/${id}`);

const createPagamento = (data) => axios.post(`${API_URL}/cadastrar_pagamento`, data);

const updatePagamento = (id, data) => axios.put(`${API_URL}/editar_pagamento`, { id_pagamento: id, ...data });

const deletePagamento = (id) => axios.delete(`${API_URL}/excluir_pagamento/${id}`);

export default {
  getPagamentos,
  getPagamento,
  createPagamento,
  updatePagamento,
  deletePagamento,
};
