import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../Categories/Categories';
import { setCategories, fetchCategories } from '../../reducer/actions';

export default function CategoriesContainer() {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  const handleLocation = (location) => {
    dispatch(setCategories(location));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Categories
      categories={categories}
      onClick={handleLocation}
    />
  );
}
