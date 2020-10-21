import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FoodLocationList from '../components/FoodLocationList';
import {
  updateLocale,
} from '../modules/actions';

export default function LocaleContainer() {
  const { locales } = useSelector((state) => ({
    locales: state.locales,
  }));

  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(updateLocale(e.target.textContent));
  }

  return (
    <ul>
      <FoodLocationList
        items={locales}
        onClick={handleClick}
      />
    </ul>
  );
}
