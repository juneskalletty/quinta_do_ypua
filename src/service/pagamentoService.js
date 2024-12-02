import axios from 'axios';

const API_URL = 'http://localhost:8080/api/pagamentos';

export const listarPagamentos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const salvarPagamento = async (pagamento) => {
  const response = await axios.post(API_URL, pagamento);
  return response.data;
};

export const excluirPagamento = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
