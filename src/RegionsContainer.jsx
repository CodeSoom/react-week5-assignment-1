import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  updateSelected,
} from './actions';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { region } = useSelector(get('selected'));
  const regions = useSelector(get('regions'));

  function handleClick(type, name) {
    dispatch(updateSelected(type, name));
  }

  return (
    <Regions
      selected={region}
      regions={regions}
      onClick={handleClick}
    />
  );
}
