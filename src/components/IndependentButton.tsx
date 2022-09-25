import React from 'react';

type IndependentButtonType = {
  callback: () => void
}

export const IndependentButton = (props: IndependentButtonType) => {
  const onClickHandler = () => {
    props.callback()
  }
  return (
	<button onClick={onClickHandler}>+</button>
  );
};