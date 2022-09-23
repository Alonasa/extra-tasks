import React from 'react';

type FilterItemType = {
  banknots: string
  value: number
  number: string
}

type FilterType = {
  wallet: Array<FilterItemType>
}

export const Filter = (props: FilterType) => {
  
  return (
	<>
	  <button onClick={() => selectHandler('All')}>All</button>
	  <button onClick={() => selectHandler('RUBLS')}>Rubble</button>
	  <button onClick={() => selectHandler('Dollars')}>USD</button>
	  <ul style={{listStyle: 'none'}}>
		{props.wallet.map((m, index) => {
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