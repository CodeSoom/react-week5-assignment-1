import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';

import {
  selecteRegion,
} from './actions';

export default function Regions({ regions }) {
  const dispatch = useDispatch();

  const { selectedRegion } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(region) {
    dispatch(selecteRegion(region));
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <Button
            item={region}
            onclick={handleClick}
            selectedButton={selectedRegion}
          />
        </li>
      ))}
    </ul>
  );
}
