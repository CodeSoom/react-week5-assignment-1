import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectInfo } from './actions';

import Buttons from './Buttons';

export default function ButtonsContainer({ type }) {
  const dispatch = useDispatch();

  const { buttonNames, selectedButton } = useSelector((state) => ({
    buttonNames: state[`${type}s`],
    selectedButton: state.selectInfo[type],
  }));

  function handleClickSelect(event) {
    const updateInfo = {
      type: event.target.name,
      value: event.target.textContent,
    };

    dispatch(setSelectInfo(updateInfo));
  }

  return (
    <Buttons
      name={type}
      selectedButton={selectedButton}
      buttonNames={buttonNames}
      onClickSelect={handleClickSelect}
    />
  );
}
