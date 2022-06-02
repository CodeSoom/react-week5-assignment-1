import { useDispatch, useSelector } from 'react-redux';

import { changeCategoryId } from '../actions';

import Categories from '../components/Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, categoryId } = useSelector((state) => state);

  const handleClickChangeCategoryId = (categoryIdParams) => {
    dispatch(changeCategoryId(categoryIdParams));
  };

  return (
    <Categories
      categories={categories}
      changeCategoryId={categoryId}
      onClick={handleClickChangeCategoryId}
    />
  );
}
