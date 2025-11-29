import React, { useState } from 'react';

const ListaTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionar = () => {
    const texto = tarefa.trim();
    if (!texto) return;
    setTarefas([...tarefas, { id: Date.now(), texto, feita: false }]);
    setTarefa('');
  };

  const remover = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  const toggleFeita = (id) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, feita: !t.feita } : t));
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') adicionar();
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Digite uma tarefa"
          className="border rounded px-2 py-1"
        />
        <button onClick={adicionar} className="bg-indigo-600 text-white px-3 rounded">Adicionar</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 12 }}>
        {tarefas.map(t => (
          <li key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <input type="checkbox" checked={t.feita} onChange={() => toggleFeita(t.id)} />
            <span style={{ textDecoration: t.feita ? 'line-through' : 'none' }}>{t.texto}</span>
            <button onClick={() => remover(t.id)} style={{ marginLeft: 'auto' }}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
