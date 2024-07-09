import React, { useState } from 'react';
import Menu from '../components/Menu';
import HeaderPagamentos from '../components/HeaderPagamentos';
import '../style/pages/Pagamento.css';

const Pagamento = () => {
  const [pagamentos, setPagamentos] = useState([
    { id: 1, descricao: 'Professor você está', valor: 1000, pago: true },
    { id: 2, descricao: 'Um tanto elegante hoje', valor: 1000, pago: true },
    { id: 3, descricao: 'Cartão de Crédito', valor: 1000, pago: false },
    { id: 4, descricao: 'Pix', valor: 1000, pago: false },
  ]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newPagamento, setNewPagamento] = useState({ descricao: '', valor: '', pago: false });
  const [filter, setFilter] = useState('todos');
  const [mes, setMes] = useState('Julho');
  const [ano, setAno] = useState(2024);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewPagamento({ ...newPagamento, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const valorConvertido = parseFloat(newPagamento.valor);
    if (isNaN(valorConvertido)) {
      alert("Por favor, insira um valor válido.");
      return;
    }
    setPagamentos([...pagamentos, { ...newPagamento, valor: valorConvertido, id: pagamentos.length + 1 }]);
    setIsFormVisible(false);
    setNewPagamento({ descricao: '', valor: '', pago: false });
  };

  const handleDelete = (id) => {
    setPagamentos(pagamentos.filter(pagamento => pagamento.id !== id));
  };

  const filteredPagamentos = pagamentos.filter(pagamento => {
    if (filter === 'pagos') return pagamento.pago;
    if (filter === 'naoPagos') return !pagamento.pago;
    return true;
  });

  // Hardcoding cadastrando os meses e anos. Corrigir fururamente.

  return (
    <div className="container">
      <Menu />
      <div className="content">
        <HeaderPagamentos setFilter={setFilter} pagamentos={pagamentos} />
        <div className="pagamentos-header">
          <div className="date-filters">
            <select value={mes} onChange={(e) => setMes(e.target.value)}>
              <option value="Janeiro">Janeiro</option>
              <option value="Fevereiro">Fevereiro</option>
              <option value="Março">Março</option>
              <option value="Abril">Abril</option>
              <option value="Maio">Maio</option>
              <option value="Junho">Junho</option>
              <option value="Julho">Julho</option>
              <option value="Agosto">Agosto</option>
              <option value="Setembro">Setembro</option>
              <option value="Outubro">Outubro</option>
              <option value="Novembro">Novembro</option>
              <option value="Dezembro">Dezembro</option>
            </select>
            <select value={ano} onChange={(e) => setAno(e.target.value)}>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
            </select>
          </div> 
          <button onClick={() => setIsFormVisible(true)} className="add-payment">Adicionar Pagamento</button>
        </div>
        <div className="pagamentos-tabela">
          <div className="tabela-header">
            <div className="tabela-col">Forma de Pagamento</div>
            <div className="tabela-col">Valor</div>
            <div className="tabela-col"></div>
          </div>
          {filteredPagamentos.map(pagamento => (
            <div key={pagamento.id} className="tabela-row">
              <div className="tabela-col">{pagamento.descricao}</div>
              <div className="tabela-col">R${pagamento.valor.toFixed(2)}</div>
              <div className="tabela-col">
                <button onClick={() => handleDelete(pagamento.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
        {isFormVisible && (
          <div className="form-overlay">
            <form className="form" onSubmit={handleFormSubmit}>
              <h2>Novo Pagamento</h2>
              <label>
                Descrição:
                <input 
                  type="text" 
                  name="descricao" 
                  value={newPagamento.descricao} 
                  onChange={handleFormChange} 
                />
              </label>
              <label>
                Valor:
                <input 
                  type="number" 
                  name="valor" 
                  value={newPagamento.valor} 
                  onChange={handleFormChange} 
                />
              </label>
              <label>
                Pago:
                <input 
                  type="checkbox" 
                  name="pago" 
                  checked={newPagamento.pago} 
                  onChange={(e) => setNewPagamento({ ...newPagamento, pago: e.target.checked })} 
                />
              </label>
              <div className="form-buttons">
                <button type="submit">Salvar</button>
                <button type="button" onClick={() => setIsFormVisible(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagamento;
