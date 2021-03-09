import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories, selectCategory } from './actions';
import List from './List';

function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  function handleClick(category) {
    dispatch(selectCategory(category.id));
  }
  return (
    <div><List list={categories} onClick={handleClick} /></div>
  );
}

export default CategoriesContainer;
