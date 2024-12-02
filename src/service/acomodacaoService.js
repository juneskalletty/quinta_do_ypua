import axios from 'axios';

const API_URL = 'http://localhost:8080/api/acomodacoes';

export const listarAcomodacoes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const salvarAcomodacao = async (acomodacao) => {
  const response = await axios.post(API_URL, acomodacao);
  return response.data;
};

export const excluirAcomodacao = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
