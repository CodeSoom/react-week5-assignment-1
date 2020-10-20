import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesFixture, regionsFixture } from '../fixtures/fixtures';
import { loadRestaurantInfo } from './actions';
import CategoryList from './CategoryList';
import RegionList from './RegionList';

const ListContainer = () => {
  const dispatch = useDispatch();

  const { categories, regions } = useSelector((state) => ({
    categories: state.categories,
    regions: state.regions,
  }));

  const loadRestaurantDispatch = ({ type, info }) => dispatch(loadRestaurantInfo({ type, info }));

  useEffect(() => {
    loadRestaurantDispatch({ type: 'categories', info: categoriesFixture });
    loadRestaurantDispatch({ type: 'regions', info: regionsFixture });
  }, []);

  return (
    <>
      <RegionList
        regions={regions}
      />
      <CategoryList
        categories={categories}
      />
    </>
  );
};

export default ListContainer;
