import React, {ChangeEvent, useState} from 'react';
import {TaskType} from '../App';

type UniversalInputType = {
  addTask: (newTask: TaskType) => void
}

export const UniversalInput = (props: UniversalInputType) => {
  let [title, setTitle] = useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const onClickHandler = () => {
    const newTask:TaskType = {id:12, title: title};
	props.addTask(newTask);
	setTitle('')
  }
  return (
	<div style={{marginBottom: '20px'}}>
	  <input value={title} onChange={onChangeHandler}></input>
	  <button onClick={onClickHandler}>+</button>
	</div>
  );
};