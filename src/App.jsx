import { useEffect, useState } from 'react';

import ButtonList from './ButtonList';

import { regions, categories, restaurants } from '../fixtures';

export default function App() {
  const [state, setState] = useState({
    region: { id: 0, name: '' },
    category: { id: 0, name: '' },
    queriedRestaurants: [],
  });

  const { region, category, queriedRestaurants } = state;

  const handleClick = (type, item) => () => {
    setState({
      ...state,
      [type]: item,
    });
  };

  const getRestarants = (regionName, categoryId) => (restaurants[`${regionName} ${categoryId}`] ?? []);

  useEffect(() => {
    if (region.name && category.id) {
      setState({
        ...state,
        queriedRestaurants: getRestarants(region.name, category.id),
      });
    }
  }, [region, category]);

  return (
    <div>
      <ButtonList type="region" items={regions} chosenItem={region} handleClick={handleClick} />
      <ButtonList type="category" items={categories} chosenItem={category} handleClick={handleClick} />
      <ul>
        {queriedRestaurants.map((restaurant) => (
          <li key={restaurant.name}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
