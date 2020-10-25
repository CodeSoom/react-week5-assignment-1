import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from './actions';

import Button from './Button';

export default function ButtonContainer({ name, id, filterName }) {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => ({ filter: state.filter }));

  const selected = filter && (name === filter.regionName || id === filter.categoryId);

  function handleClick() {
    dispatch(updateFilter({ filter: { [filterName]: id || name } }));
  }

  return (
    <Button
      name={name}
      selected={selected}
      onClick={handleClick}
    />
  );
}
