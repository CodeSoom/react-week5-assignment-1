import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function setSelected() {
    dispatch({});
  }

  return (
    <Buttons
      buttons={regions}
      handleClick={setSelected}
    />
  );
}
