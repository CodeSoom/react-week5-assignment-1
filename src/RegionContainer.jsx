import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonList from './ButtonList';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClickRegion() {
    dispatch(checkRegion(id));
  }

  return (
    <ButtonList
      labels={regions}
      onClick={handleClickRegion}
    />
  );
}
