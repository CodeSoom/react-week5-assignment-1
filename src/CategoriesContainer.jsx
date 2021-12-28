import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from './actions';

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
    <Categories
      categories={categories}
      updateSelectedCategory={updateSelectedCategory}
      selectedCategory={selectedCategory}
    />
  );
}
