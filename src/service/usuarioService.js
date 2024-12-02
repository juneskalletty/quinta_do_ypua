import axios from 'axios';

const API_URL = 'http://localhost:8080/api/usuarios';

export const listarUsuarios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const salvarUsuario = async (usuario) => {
  const response = await axios.post(API_URL, usuario);
  return response.data;
};

export const excluirUsuario = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
