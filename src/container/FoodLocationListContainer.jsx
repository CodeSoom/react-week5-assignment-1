import React from 'react';
import { useSelector } from 'react-redux';

import FoodLocationList from '../components/FoodLocationList';

export default function LocaleListContainer() {
  const { locales, foodClassifications } = useSelector((state) => ({
    locales: state.locales,
    foodClassifications: state.foodClassifications,
  }));

  return (
    <div>
      <ul>
        <FoodLocationList
          items={locales}
        />
      </ul>

      <ul>
        <FoodLocationList
          items={foodClassifications}
        />
      </ul>
    </div>
  );
}
