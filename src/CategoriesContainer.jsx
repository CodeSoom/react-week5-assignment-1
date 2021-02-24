import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createThunk, GET_CATEGORIES } from './actions';
import List from './List';
import { getCategories } from './services/api';

function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(createThunk(GET_CATEGORIES, getCategories));
  }, []);
  return (
    <div className="categories-container"><List list={categories} /></div>
  );
}

export default CategoriesContainer;
