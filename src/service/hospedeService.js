import axios from 'axios';

const API_URL = 'http://localhost:8080/api/hospedes';

export const listarHospedes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const salvarHospede = async (hospede) => {
  const response = await axios.post(API_URL, hospede);
  return response.data;
};

export const excluirHospede = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
