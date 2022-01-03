import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Catogories from '../Categories';
import { loadCategories, setCategoryActiveId } from '../actions';

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const { categories, activeId } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const handleClick = (id) => {
    dispatch(setCategoryActiveId(id));
  };

  return (
    <Catogories
      categories={categories}
      activeId={activeId}
      onClick={handleClick}
    />
  );
}
