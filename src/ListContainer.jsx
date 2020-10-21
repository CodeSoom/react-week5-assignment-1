import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesFixture, regionsFixture } from '../fixtures/fixtures';
import { loadRestaurantInfo, updateRestaurant } from './actions';
import CategoryList from './CategoryList';
import RegionList from './RegionList';

const ListContainer = () => {
  const dispatch = useDispatch();

  const {
    categories, regions, category, region,
  } = useSelector((state) => ({
    category: state.category,
    categories: state.categories,
    region: state.region,
    regions: state.regions,
  }));

  const loadRestaurantDispatch = ({ type, info }) => dispatch(loadRestaurantInfo({ type, info }));
  const updateRestaurantDispatch = (stateId) => dispatch(updateRestaurant(stateId));

  useEffect(() => {
    loadRestaurantDispatch({ type: 'categories', info: categoriesFixture });
    loadRestaurantDispatch({ type: 'regions', info: regionsFixture });
  }, []);

  const handleClickButton = (state) => {
    updateRestaurantDispatch(state);
  };

  return (
    <>
      <RegionList
        regions={regions}
        onSelectRegionClick={handleClickButton}
        regionState={region}
      />
      <CategoryList
        categories={categories}
        onSelectCategoryClick={handleClickButton}
        categoryState={category}
      />
    </>
  );
};

export default ListContainer;
