import { useEffect, useState } from 'react';
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
      <ul>
        {regions.map((_region) => (
          <li key={_region.name}>
            <button type="button" onClick={handleClick('region', _region)}>
              {`${_region.name}${_region.name === region.name ? '(V)' : ''}`}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map((_category) => (
          <li key={_category.name}>
            <button type="button" onClick={handleClick('category', _category)}>
              {`${_category.name}${_category.name === category.name ? '(V)' : ''}`}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {queriedRestaurants.map((restaurant) => (
          <li key={restaurant.name}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
