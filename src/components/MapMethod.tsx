import React from 'react';

type CarsType = {
  cars: Array<CarType>
}

type CarType = {
  manufacturer: string
  model: string
}

export const MapMethod = (props: CarsType) => {
  return (
	<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', padding: '20px', borderBottom: '2px solid white'}}>
	  <h2 style={{color: 'antiquewhite'}}>We realized map method. TASK 1</h2>
	  <div>
		<h3>Available cars for a rent in li</h3>
		<ul style={{listStyle: 'none', textAlign: 'left'}}>
		  {props.cars.map((car, index) => {
			return (
			  <li key={index}>
				<span>Manufacturer: {car.manufacturer} </span>
				<span>Model: {car.model.toUpperCase()} </span>
			  </li>
			)
		  })}
		</ul>
	  </div>
	  <div style={{width:'80%'}}>
		<h3>Available cars in table</h3>
		<table style={{width:'100%'}}>
		  <tbody>
		  <tr key={'01'}>
			<th>Number</th>
			<th>Manufacturer</th>
			<th>Model</th>
		  </tr>
		  {props.cars.map((car, index) => {
			return (
			  <tr key={index}>
				<td>{index + 1}</td>
				<td>{car.manufacturer}</td>
				<td>{car.model}</td>
			  </tr>
			)
		  })}
		  </tbody>
		</table>
	  
	  </div>
	</div>
  )
	;
};