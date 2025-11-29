import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import styles from './TaskApp.module.css';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('pf_tasks');
    if (raw) {
      try {
        setTasks(JSON.parse(raw));
      } catch (err) {
        console.warn('Erro ao ler tarefas do localStorage', err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pf_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks(prev => [...prev, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className="text-3xl font-bold mb-4">Projeto Final — Mini App de Tarefas</h2>
      <p className={styles.subtle + ' mb-6'}>Controle suas tarefas, marque como concluídas e persista localmente.</p>
      <TaskForm onAdd={addTask} />
      <div style={{ marginTop: 16 }}>
        <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      </div>
    </div>
  );
};

export default TaskApp;
