import React, {useState} from 'react';

export const Filter = () => {
  
  return (
	<>
	  <button onClick={() => selectHandler('All')}>All</button>
	  <button onClick={() => selectHandler('RUBLS')}>Rubble</button>
	  <button onClick={() => selectHandler('Dollars')}>USD</button>
	  <ul style={{listStyle: 'none'}}>
		{wallet.map((m, index) => {
		  return (
			<li key={index}>
			  <span>{m.banknots}  </span>
			  <span>{m.value}  </span>
			  <span>{m.number}  </span>
			</li>
		  )
		})}
	  </ul>
	</>
  );
};