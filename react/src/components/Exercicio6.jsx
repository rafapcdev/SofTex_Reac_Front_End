import React, { useState } from 'react';
import InputNome from './InputNome';
import ExibirNome from './ExibirNome';

const Exercicio6 = () => {
  const [nome, setNome] = useState('');

  return (
    <div>
      <h2>Lifting State Up (Exercício 6)</h2>
      <InputNome nome={nome} onChange={setNome} />
      <ExibirNome nome={nome} />
    </div>
  );
};

export default Exercicio6;
