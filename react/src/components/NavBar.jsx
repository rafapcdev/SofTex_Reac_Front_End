// NavBar.jsx (Versão Corrigida e Otimizada)

import React from 'react';

const NavBar = ({ currentPage = 'exercicios', setCurrentPage = () => {} }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-linear-to-r from-indigo-700 to-indigo-900 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-white drop-shadow-lg" aria-hidden>
            🚀
          </span>
          <span className="text-white font-semibold">Meu Portfólio de Componentes</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage('exercicios')}
            aria-current={currentPage === 'exercicios' ? 'page' : undefined}
            className={`px-3 py-2 rounded-md font-medium transition-all duration-150 ${
              currentPage === 'exercicios' ? 'bg-white text-indigo-800 shadow-md' : 'text-white hover:bg-indigo-600'
            }`}
          >
            Exercícios
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage('projeto')}
            aria-current={currentPage === 'projeto' ? 'page' : undefined}
            className={`px-3 py-2 rounded-md font-medium transition-all duration-150 ${
              currentPage === 'projeto' ? 'bg-white text-indigo-800 shadow-md' : 'text-white hover:bg-indigo-600'
            }`}
          >
            Projeto Final
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;