import React, {useState} from 'react';

export const Filter = () => {
  const [money, setMoney] = useState([
	{banknots: 'Dollars', value: 100, number: ' a1234567890'},
	{banknots: 'Dollars', value: 50, number: ' z1234567890'},
	{banknots: 'RUBLS', value: 100, number: ' w1234567890'},
	{banknots: 'Dollars', value: 100, number: ' e1234567890'},
	{banknots: 'Dollars', value: 50, number: ' c1234567890'},
	{banknots: 'RUBLS', value: 100, number: ' r1234567890'},
	{banknots: 'Dollars', value: 50, number: ' x1234567890'},
	{banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])
  
  type filterType = 'All' | 'Dollars' | 'RUBLS';
  let [filter, setFilter] = useState<filterType>('All')
  
  let wallet = money
  
  if (filter === 'Dollars') {
	wallet = money.filter(m => m.banknots === filter)
  }

  if (filter === 'RUBLS') {
	wallet = money.filter(m => m.banknots === filter)
  }
  
  
  const selectHandler = (option: filterType) => {
	setFilter(option)
  }
  
  
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