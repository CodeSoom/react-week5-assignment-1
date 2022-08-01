import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from '../store/actions';

import Categories from '../components/Categories';

export default function CategoriesContainer() {
  const { categories, selectedCategoryId } = useSelector((state) => ({
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId,
  }));

  const dispatch = useDispatch();

  const handleSelectCategory = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <>
      <Categories
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        selectCategory={handleSelectCategory}
      />
    </>
  );
}
