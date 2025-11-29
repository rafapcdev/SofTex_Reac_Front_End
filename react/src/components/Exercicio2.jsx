import React from 'react';
import Mensagem from './Mensagem'; // Importa o componente criado

const Exercicio2 = () => {
  return (
    <div>
      <h2>Uso de Props</h2>
      
      {/* Usando Mensagem a primeira vez com um texto */}
      <Mensagem texto="Esta é a primeira mensagem, enviada via prop!" />
      
      {/* Usando Mensagem a segunda vez com outro texto */}
      <Mensagem texto="Aqui está a segunda mensagem, provando a reutilização do componente." />
    </div>
  );
};

export default Exercicio2;