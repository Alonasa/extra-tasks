import React from 'react';

type IndependentButtonType = {
  name: string
  callback: () => void
}

export const IndependentButton = (props: IndependentButtonType) => {
  const onClickHandler = () => {
    props.callback()
  }
  return (
	<button onClick={onClickHandler}>{props.name}</button>
  );
};