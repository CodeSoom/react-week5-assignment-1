import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from './actions';
import { loadCategories } from './async-actions';

import Categories from './Categories';

const CategoriesContainer = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const handleClick = (category) => dispatch(selectCategory(category));

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
    />
  );
};

export default CategoriesContainer;
