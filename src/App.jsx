import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from './actions';
import { get } from './utils';
import RegionContainer from './RegionContainer';

export default function App() {
  const dispatch = useDispatch();

  const selectedRegion = useSelector(get('selectedRegion'));
  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));
  const restaurants = useSelector(get('restaurants'));

  const handleCategoryClick = (name) => {
    dispatch(setSelectedCategory(name));
  };

  return (
    <>
      <RegionContainer />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={() => handleCategoryClick(category)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
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
