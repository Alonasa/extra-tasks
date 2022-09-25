import React from 'react';

type InputType = {
  title: string
  onChangeHandler: () => void
}

export const Input = (props: InputType) => {
  return (
	<input value={props.title} onChange={props.onChangeHandler}></input>
  );
};