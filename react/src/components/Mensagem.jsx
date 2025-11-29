import React from 'react';

const Mensagem = (props) => {
  // Acessa a informação passada pelo componente pai através de props.texto
  return <p>{props.texto}</p>;
};

export default Mensagem;