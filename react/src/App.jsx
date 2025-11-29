import React, { useState } from 'react';
import './App.css'; // Supondo que você tenha um arquivo CSS base para estilização

import NavBar from './components/NavBar';
import Saudacao from './components/Saudacao';
import Exercicio2 from './components/Exercicio2';
import Contador from './components/Contador';
import Formulario from './components/Formulario';
import Timer from './components/Timer';
import Exercicio6 from './components/Exercicio6';
import ListaTarefas from './components/ListaTarefas';
import Exercicio8 from './components/Exercicio8';
import TaskApp from './projeto-final-react/TaskApp';

function App() {
  const [currentPage, setCurrentPage] = useState('exercicios');

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 space-y-8"> 
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-4xl mx-auto px-4 space-y-6 py-8">
        {currentPage === 'exercicios' && (
          <>
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercício 1 - Componente Simples</h2>
              <Saudacao  />
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercício 2 - Manipulação de Eventos</h2>
            <Exercicio2 />
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercicio 3 - botao de contagem</h2>
            <Contador />
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercício 4 - Formulario</h2>
              <Formulario />
            </section>

             <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercicio 5 - Timer</h2>
              <div className="space-y-4">
                <Timer />
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercício 6 — Lifting State Up</h2>
              <Exercicio6 />
            </section>

            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercício 7 — Lista de tarefas</h2>
              <ListaTarefas />
            </section>


            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Exercício 8 — CSS Modules</h2>
              <Exercicio8 />
            </section>

          </>
        )}

        {currentPage === 'projeto' && (
          <div className="min-h-[70vh] flex items-center justify-center px-4">
            <TaskApp />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;