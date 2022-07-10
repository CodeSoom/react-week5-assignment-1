import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from './action';
import Category from './Category';

export default function CategoryContainer() {
  const dispatch = useDispatch();

  const { categories, selectedCategory } = useSelector((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));

  const handleClick = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <Category
      onClick={handleClick}
      categories={categories}
      selectedCategory={selectedCategory}
    />
  );
}
