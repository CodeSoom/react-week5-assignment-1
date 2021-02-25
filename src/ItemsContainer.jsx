import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getRestaurant } from './actions';

import Items from './Items';

export default function ItemsContainer() {
  const dispatch = useDispatch();

  const { region, category } = useSelector((state) => ({
    region: state.region,
    category: state.category,
  }));

  function handleClick(item) {
    dispatch(getRestaurant(item));
  }

  return (
    <Items
      region={region}
      category={category}
      onClick={handleClick}
    />
  );
}
