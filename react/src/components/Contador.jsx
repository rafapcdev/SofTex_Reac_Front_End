import React, { useState } from 'react';

const Contador = () => {
  // 1. Estado 'numero', começando em 0
  const [numero, setNumero] = useState(0);

  // Função para incrementar
  const incrementar = () => {
    setNumero(numero + 1);
  };

  // Função para decrementar
  const decrementar = () => {
    setNumero(numero - 1);
  };

  return (
    <div className='p-4 border border-gray-200 rounded-lg'>
      <h2 className=' text-xl font-semibold mb-3'>Contador Simples</h2>
      
      {/* Exibição do valor */}
      <p>Valor Atual: <strong>{numero}</strong></p>

      <div className="flex justify-center space-x-4">
        
        <button 
          className='bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-150 hover:bg-indigo-700' 
          onClick={incrementar}
        >
          +1 (Incrementar)
        </button>
        
        <button 
          className='bg-red-500 text-white font-bold py-2 px-4 rounded transition duration-150 hover:bg-red-600' 
          onClick={decrementar}
        >
          -1 (Decrementar)
        </button>
      </div>
    </div>
  );
};

export default Contador;