import { useDispatch, useSelector } from 'react-redux';

import { changeCategoryId } from '../actions';

import Categories from '../components/Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, selectedCategoryId } = useSelector((state) => state);

  const handleClickChangeCategoryId = (categoryId) => {
    dispatch(changeCategoryId(categoryId));
  };

  return (
    <Categories
      categories={categories}
      changeCategoryId={selectedCategoryId}
      onClick={handleClickChangeCategoryId}
    />
  );
}
