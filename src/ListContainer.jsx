import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateRestaurant, loadRestaurants } from './actions';
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

  useEffect(() => {
    dispatch(loadRestaurants('categories'));
    dispatch(loadRestaurants('regions'));
  }, []);

  const handleClickButton = (stateId) => {
    dispatch(updateRestaurant(stateId));
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
