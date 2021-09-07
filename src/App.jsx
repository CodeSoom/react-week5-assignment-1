import { useState, useEffect } from 'react';

import loadCategories from './services/api';

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadCategories();
      setCategories(data);
    };

    fetchData();
  }, []);

  return (
    <>
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
