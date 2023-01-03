import { useEffect, useState } from 'react';

import Categories from './Categories';

const CategoriesContainer = () => {
  const [categories, setCategories] = useState([]);

  const updateCheckedCategory = (checkedCategoryId) => {
    const updatedCategories = categories.map((category) => {
      const newCategory = {
        ...category,
        checked: false,
      };

      if (category.id === checkedCategoryId) {
        newCategory.checked = true;
      }

      return newCategory;
    });

    setCategories(updatedCategories);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('https://eatgo-customer-api.ahastudio.com/categories');
      const fetchedCategories = await response.json();

      setCategories(fetchedCategories);
    })();
  }, []);

  return (
    <Categories categories={categories} onUpdateCategory={updateCheckedCategory} />
  );
};
export default CategoriesContainer;
