import React from 'react';
import { useSelector } from 'react-redux';

import FoodLocationList from '../components/FoodLocationList';

export default function FoodCategoryContainer() {
  const { locales, foodCategories } = useSelector((state) => ({
    locales: state.locales,
    foodCategories: state.foodCategories,
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
          items={foodCategories}
        />
      </ul>
    </div>
  );
}
