import React from 'react';

const TaskList = ({ tasks = [], onToggle, onRemove }) => {
  if (!tasks.length) return <p>Nenhuma tarefa ainda.</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((t, idx) => (
        <li key={t.id} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
          <input type="checkbox" checked={t.done} onChange={() => onToggle(t.id)} />
          <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
          <button onClick={() => onRemove(t.id)} style={{ marginLeft: 'auto' }}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
