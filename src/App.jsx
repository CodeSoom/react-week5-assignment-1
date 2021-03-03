import React from 'react';
import { useSelector } from 'react-redux';
import { get } from './utils';
import RegionContainer from './RegionContainer';
import CategoryContainer from './CategoryContainer';

export default function App() {
  const selectedRegion = useSelector(get('selectedRegion'));
  const selectedCategory = useSelector(get('selectedCategory'));
  const restaurants = useSelector(get('restaurants'));

  return (
    <>
      <RegionContainer />
      <CategoryContainer />
      <ul>
        {selectedCategory && selectedRegion
          ? restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          )) : null}
      </ul>
    </>
  );
}
