import React, {useState} from 'react';

export const UseState = () => {
  let [i, setI] = useState(1)
  const add1Handler = () => {
    setI(i+1)
  }
  
  const set0Handler = () => {
    setI(0)
  }
  
  return (
	<div style={{borderBottom: '2px solid white', padding: '20px'}}>
	  <h3>{i}</h3>
	  <button onClick={add1Handler}>Add 1</button>
	  <button onClick={set0Handler}>Set to 0</button>
	</div>
  );
};