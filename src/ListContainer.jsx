import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesFixture } from '../fixtures/fixtures';
import { loadRestaurantInfo } from './actions';
import CategoryList from './CategoryList';

const ListContainer = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  useEffect(() => {
    dispatch(loadRestaurantInfo({
      type: 'categories',
      info: categoriesFixture,
    }));
  }, []);

  return (
    <CategoryList
      categories={categories}
    />
  );
};

export default ListContainer;
