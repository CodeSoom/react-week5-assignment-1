import { useEffect, useState } from 'react';

import List from './List';

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
      <List type='region' items={regions} chosenItem={region} onClick={handleClick} />
      <List type='category' items={categories} chosenItem={category} onClick={handleClick} />
      <ul>
        {queriedRestaurants.map((restaurant) => (
          <li key={restaurant.name}>{restaurant.name}</li>
        ))}
      </ul>
    </div >
  );
}
