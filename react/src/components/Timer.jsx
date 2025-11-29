import React, { useState, useEffect } from 'react';

const Timer = () => {

  const [tempo, setTempo] = useState(0);


  useEffect(() => {
    console.log('Timer iniciado!');
    

    const intervalId = setInterval(() => {

      setTempo(prevTempo => prevTempo + 1);
    }, 1000);

    return () => {
      console.log('Timer limpo/parado!');
      clearInterval(intervalId); 
    };

  
  }, []);

  return (
    <div>
      <h2>Timer com useEffect</h2>
  
      <p>Tempo: <strong>{tempo}</strong> segundos</p>
    </div>
  );
};

export default Timer;