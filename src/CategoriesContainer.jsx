import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategoriesThunk, selectCategory } from './actions';
import List from './List';

function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);

  function handleClick(category) {
    dispatch(selectCategory(category.id));
  }
  return (
    <div><List list={categories} onClick={handleClick} /></div>
  );
}

export default CategoriesContainer;
