import React, {useState} from 'react';
import './App.css';
import {MapMethod} from './components/MapMethod';
import {Button} from './components/Button';
import {UseState} from './components/UseState';
import {Filter} from './components/Filter';
import {UniversalInput} from './components/UniversalInput';
import {IndependentButton} from './components/IndependentButton';
import {Input} from './components/Input';

export type filterType = 'All' | 'Dollars' | 'RUBLS';
export type TaskType = {
  id: number
  title: string
}

function App() {
  const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
  ]
  
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
  
  const [task, setTask] = useState([
    {id: 10, title: 'Hi'},
    {id: 11, title: 'How are you?'}
  ])
  
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
  
  const addTask = (newTask: TaskType) => {
    setTask([newTask, ...task])
  }
  
  let [title, setTitle] = useState('');
  
  const onClickHandler = () => {
    const newTask:TaskType = {id:12, title: title};
    addTask(newTask);
    setTitle('')
  }
  
  return (
    <div className="App">
      <MapMethod cars={topCars}/>
      <Button/>
      <UseState/>
      <Filter wallet={wallet} selectHandler={selectHandler}/>
      <UniversalInput addTask={addTask}/>
      {task.map(t=> {
        return( <div key={t.id}>{t.title}</div>)
      })}
      <Input title={title} func={setTitle}/>
      <IndependentButton name={'+'} callback={onClickHandler}/>
    </div>
  );
}

export default App;
