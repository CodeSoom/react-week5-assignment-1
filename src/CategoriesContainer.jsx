import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from './action';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.category,
  }));

  const updateSelectedCategory = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        updateSelectedCategory={updateSelectedCategory}
      />
    </>
  );
}
