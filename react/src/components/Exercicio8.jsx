import React from 'react';
import styles from './Exercicio8.module.css';

const Exercicio8 = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Exercício 8 — CSS Modules</h3>
      <div className={styles.box}>
        <p>Este componente usa CSS Modules para escopo de CSS.</p>
      </div>
    </div>
  );
};

export default Exercicio8;
