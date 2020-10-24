import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setRestaurantsAsync } from './actions';
import List from './List';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { restaurants, selectedButtons } = useSelector((state) => ({
    restaurants: state.restaurants,
    selectedButtons: state.selectedButtons,
  }));

  useEffect(() => {
    const { region, category } = selectedButtons;

    if (region === '' || category === '') {
      return;
    }

    dispatch(setRestaurantsAsync());
  }, [selectedButtons]);

  return (
    <List items={restaurants} />
  );
}
