import React from 'react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
} from './modules/actions';

export default function ResgionsContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(selectRegion());
  }

  return (
    <>
      <Regions
        onClick={handleClick}
      />
    </>
  );
}
