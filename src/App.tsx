import React from 'react';
import './App.css';
import {MapMethod} from './MapMethod';
import {Button} from './Button';

function App() {
  const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ]
  return (
    <div className="App">
      <MapMethod cars={topCars}/>
      <Button/>
    </div>
  );
}

export default App;
