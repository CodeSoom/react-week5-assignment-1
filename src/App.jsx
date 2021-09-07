import { useState, useEffect } from 'react';

import { loadCategories, loadRegions, loadRestaurants } from './services/api';

export default function App() {
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [restaurants, setRestaurants] = useState([]);

  const handleClick = ({ id, name, setSelected }) => {
    setSelected({ id, name });
  };

  const isEmpty = (param) => Object.keys(param).length === 0;

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await loadCategories();
      const regionsData = await loadRegions();

      setCategories(categoriesData);
      setRegions(regionsData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isEmpty(selectedRegion) || isEmpty(selectedCategory)) {
      return;
    }

    const fetchData = async () => {
      const data = await loadRestaurants({
        regionName: selectedRegion.name,
        categoryId: selectedCategory.id,
      });

      setRestaurants(data);
    };

    fetchData();
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick({ id, name, setSelected: setSelectedRegion })}
            >
              {id === selectedRegion.id ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick({ id, name, setSelected: setSelectedCategory })}
            >
              {id === selectedCategory.id ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {restaurants.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
