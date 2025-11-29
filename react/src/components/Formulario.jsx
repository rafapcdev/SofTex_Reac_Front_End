import React, { useState } from 'react';

const Formulario = () => {
  // 1. Estado para controlar o valor do input
  const [valorInput, setValorInput] = useState('');

  // Handler que atualiza o estado a cada mudança no input
  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  // Handler que exibe o valor no console ao clicar no botão
  const handleSubmit = () => {
    console.log('Valor digitado no input:', valorInput);
  };

  return (
    // Estilo de Card e centralização do texto
    <div className='p-6 border border-gray-200 rounded-xl shadow-md text-center bg-white'>
      
      {/* Título */}
      <h2 className='text-2xl font-semibold mb-6 text-gray-800 border-b pb-2'>
        Formulário Controlado
      </h2>
      
      {/* Ações: 
        1. Usamos a tag form para melhor semântica.
        2. Adicionamos onKeyDown para permitir submissão com Enter, 
           mas prevenimos o comportamento padrão de recarregar a página.
        3. Usamos flex e gap para espaçar o input e o botão.
      */}
      <form 
        onSubmit={(e) => e.preventDefault()} // Previne recarregamento ao submeter
        className='flex flex-col items-center space-y-4' // Alinha itens ao centro verticalmente
      >
        
        <input
          type="text"
          placeholder="Digite algo aqui..."
          // Estilização do Input: padding, borda, largura total
          className="w-full max-w-sm p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-150"
          value={valorInput}
          onChange={handleChange}
        />
        
        {/* Botão que chama a função de exibição */}
        <button 
          onClick={handleSubmit}
          type="button" // Garante que não submeta o form se estiver dentro de um
          // Estilização do Botão: cor, padding, hover
          className='bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg transition duration-150 hover:bg-indigo-700 shadow-md'
        >
          Mostrar no Console
        </button>
        
      </form>
      
      {/* Valor em tempo real */}
      <p className='mt-6 text-lg text-gray-700'>
        Valor em tempo real: <strong className='text-indigo-600'>{valorInput}</strong>
      </p>
    </div>
  );
};

export default Formulario;