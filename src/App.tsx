import React from 'react';
import './App.css';
import {MapMethod} from './components/MapMethod';
import {Button} from './components/Button';
import {UseState} from './components/UseState';

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
      <UseState/>
    </div>
  );
}

export default App;
