import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    onAdd(t);
    setText('');
  };

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: 8 }}>
      <input
        placeholder="Nova tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="bg-indigo-600 text-white px-3 rounded">Adicionar</button>
    </form>
  );
};

export default TaskForm;
