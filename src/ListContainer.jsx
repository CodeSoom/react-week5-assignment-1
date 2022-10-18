import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadRegions,
  loadCategories,
  loadRestaurants,
  setSelectedRegion,
  setSelectedCategory,
} from './actions';

import List from './List';

export default function ListContainer() {
  const {
    regions, categories, restaurants, selectedRegion, selectedCategory,
  } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
    restaurants: state.restaurants,
    selectedRegion: state.selectedRegion,
    selectedCategory: state.selectedCategory,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  function handleClickRegion(item) {
    dispatch(setSelectedRegion(item));
    if (selectedCategory.id !== undefined) {
      dispatch(loadRestaurants(item, selectedCategory));
    }
  }

  function handleClickCategory(item) {
    dispatch(setSelectedCategory(item));
    if (selectedRegion.name !== undefined) {
      dispatch(loadRestaurants(selectedRegion, item));
    }
  }

  return (
    <>
      <List hasButton="true" listItems={regions} selected={selectedRegion} onClick={handleClickRegion} />
      <br />
      <List hasButton="true" listItems={categories} selected={selectedCategory} onClick={handleClickCategory} />
      <br />
      <List listItems={restaurants} />
    </>
  );
}
