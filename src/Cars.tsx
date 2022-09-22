import React from 'react';

type CarsType = {
  cars: Array<CarType>
}

type CarType = {
  manufacturer: string
  model: string
}

export const Cars = (props: CarsType) => {
  return (
	<>
	  <h3>We have available cars for a rent</h3>
	  <ul style={{listStyle:"none", textAlign:"left"}}>
		{props.cars.map((car, index) => {
		  return (
		    <li key={index}>
			<span>Manufacturer: {car.manufacturer} </span>
			<span>Model: {car.model.toUpperCase()} </span>
		  </li>
		  )
		})}
		{/*{props.cars.map(option => {*/}
		{/*  <li>*/}
		{/*	<span>Manufacturer: {option.manufacturer}</span>*/}
		{/*	<span>Model: {option.model}</span>*/}
		{/*  </li>*/}
		{/*})}*/}
	  </ul>
	</>
  )
	;
};