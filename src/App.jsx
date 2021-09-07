import { useState, useEffect } from 'react';

import { loadCategories, loadRegions } from './services/api';

export default function App() {
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleClick = (name, setSelected) => {
    setSelected(name);
  };

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await loadCategories();
      const regionsData = await loadRegions();

      setCategories(categoriesData);
      setRegions(regionsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick(name, setSelectedRegion)}
            >
              {name === selectedRegion ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => handleClick(name, setSelectedCategory)}
            >
              {name === selectedCategory ? `${name}(V)` : name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
