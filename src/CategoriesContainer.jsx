import { useState } from 'react';
import Categories from './Categories';

const initialState = [
  { id: 1, name: '한식', checked: false },
  { id: 2, name: '중식', checked: false },
  { id: 3, name: '일식', checked: false },
];

const CategoriesContainer = () => {
  const [categories, setCategories] = useState(initialState);

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

  return (
    <Categories categories={categories} onCheckCategory={updateCheckedCategory} />
  );
};
export default CategoriesContainer;
