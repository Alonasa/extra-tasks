import React from 'react';
import {UniversalButton} from './UniversalButton';

export const Button = () => {
  const foo1 = () => {
  	console.log(100200)
  }
  const foo2 = (data: number) => {
  	console.log(data)
  }
  
  const clickMe = () => {
    console.log('I am clicked')
  }
  
  return (
	<div style={{padding: "2%"}}>
	  <h3>Buttons with info in console</h3>
	  <button onClick={foo1}>1</button>
	  <button onClick={()=>foo2(100200)}>2</button>
	  <UniversalButton title={"Click me"} callback={clickMe}/>
	</div>
  );
};