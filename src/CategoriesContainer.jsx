import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import { setSelectedCategory } from './actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector((state) => state);

  const handleChangeSelectedCategory = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleChangeSelectedCategory}
    />
  );
}
