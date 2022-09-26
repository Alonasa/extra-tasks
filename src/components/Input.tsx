import React, {ChangeEvent, useState} from 'react';

type InputType = {
  title: string
  func: (e: string) => void
}


export const Input = (props: InputType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
	props.func(e.currentTarget.value)
  }
  
  return (
	<input value={props.title} onChange={onChangeHandler}></input>
  );
};