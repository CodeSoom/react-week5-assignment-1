import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from './actions';
import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => dispatch(selectCategory(category));

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryClick={handleCategoryClick}
    />
  );
}
