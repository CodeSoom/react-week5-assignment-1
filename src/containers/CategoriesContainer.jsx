import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';

import { updateCategoryId } from '../redux/actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, categoryId } = useSelector((state) => ({
    categories: state.categories,
    categoryId: state.categoryId,
  }));

  function handleCategoryClick({ value }) {
    dispatch(updateCategoryId({ categoryId: value }));
  }

  return (
    <Categories
      categoryId={categoryId}
      categories={categories}
      onCategoryClick={handleCategoryClick}
    />
  );
}
