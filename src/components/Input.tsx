import React, {ChangeEvent, useState} from 'react';

type InputType = {
  title: string
  onChangeHandler: () => void
}


export const Input = (props: InputType) => {
  let [title, setTitle] = useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
	setTitle(e.currentTarget.value)
  }
  
  return (
	<input value={props.title} onChange={props.onChangeHandler}></input>
  );
};