import React from 'react';
import {filterType} from '../App';

type FilterItemType = {
  banknots: string
  value: number
  number: string
}

type FilterType = {
  wallet: Array<FilterItemType>
  selectHandler: (filter: filterType) => void
}

export const Filter = (props: FilterType) => {
  
  return (
	<>
	  <button onClick={() => props.selectHandler('All')}>All</button>
	  <button onClick={() => props.selectHandler('RUBLS')}>Rubble</button>
	  <button onClick={() => props.selectHandler('Dollars')}>USD</button>
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