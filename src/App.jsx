import { useState, useEffect } from 'react';

import { loadCategories, loadRegions } from './services/api';

export default function App() {
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);

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
            {name}
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
