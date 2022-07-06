import { useEffect, useState } from 'react';

import { fetchCategories } from './service/api';

export default function CategoryContainer() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  const handleClick = (setter, value) => () => {
    setter(value);
  };

  const loadCategories = async () => {
    const categoriesData = await fetchCategories();

    setCategories(categoriesData);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={handleClick(setSelectedCategory, category)}>
            {selectedCategory.id !== category.id ? (`${category.name}`) : (`${category.name}(V)`)}
          </button>
        </li>
      ))}
    </ul>
  );
}
