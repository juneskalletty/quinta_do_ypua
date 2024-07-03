/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import '../style/pages/Admin.css'; // Importar o CSS para estilização

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Obtenha os usuários do armazenamento local ou outra fonte
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEdit = (userId) => {
    const user = users.find(user => user.id === userId);
    setEditingUser(user);
  };

  const handleSave = () => {
    const updatedUsers = users.map(user => 
      user.id === editingUser.id ? { ...user, password: newPassword } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditingUser(null);
    setNewPassword('');
  };

  return (
    <div className="admin-container">
      <Menu />
      <div className="admin-content">
        <h1>Usuários Cadastrados</h1>
        <table className="users-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className={user.email === 'juneskalletty@gmail.com' ? 'admin-user' : ''}>
                <td>{user.email === 'juneskalletty@gmail.com' ? 'June (Admin)' : user.name}</td>
                <td>{user.email}</td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <div>
                      <input 
                        type="password" 
                        placeholder="Nova senha" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <button onClick={handleSave}>Salvar</button>
                      <button onClick={() => setEditingUser(null)}>Cancelar</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => handleEdit(user.id)}>Editar</button>
                      <button onClick={() => handleDelete(user.id)}>Excluir</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
