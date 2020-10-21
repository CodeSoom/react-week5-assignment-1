import React from 'react';
import { useSelector } from 'react-redux';

import FoodLocationList from '../components/FoodLocationList';

export default function LocaleContainer() {
  const { locales } = useSelector((state) => ({
    locales: state.locales,
  }));

  return (
    <ul>
      <FoodLocationList
        items={locales}
      />
    </ul>
  );
}
