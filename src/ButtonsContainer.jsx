import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedButton } from './actions';

import Buttons from './Buttons';

export default function ButtonsContainer({ type }) {
  const dispatch = useDispatch();

  const { buttonNames, selectedButton } = useSelector((state) => ({
    buttonNames: state[`${type}s`],
    selectedButton: state.selectedButtons[type],
  }));

  function handleClickSelect(event) {
    const selectedButtonValue = {
      type: event.target.name,
      value: event.target.textContent,
    };

    dispatch(setSelectedButton(selectedButtonValue));
  }

  return (
    <Buttons
      type={type}
      selectedButton={selectedButton}
      buttonNames={buttonNames}
      onClickSelect={handleClickSelect}
    />
  );
}
