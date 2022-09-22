import React from 'react';

type UniversalButtonType = {
  title: string
  callback: ()=> void
}

export const UniversalButton = (props: UniversalButtonType) => {
  const onClickHandler = () => {
    props.callback()
  }
  return (
	<button onClick={onClickHandler}>
	  {props.title}
	</button>
  );
};