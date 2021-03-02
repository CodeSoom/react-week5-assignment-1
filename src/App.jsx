import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory, setSelectedRegion } from './actions';
import { get } from './utils';

export default function App() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));
  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));
  const restaurants = useSelector(get('restaurants'));

  const handleRegionClick = (name) => {
    dispatch(setSelectedRegion(name));
  };

  const handleCategoryClick = (name) => {
    dispatch(setSelectedCategory(name));
  };

  return (
    <>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button type="button" onClick={() => handleRegionClick(region.name)}>
              {region.name}
            </button>
          </li>
        ))}
      </ul>
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
