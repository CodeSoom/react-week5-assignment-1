import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';
import Regions from './Regions';
import RestaurantsContainer from './RestaurantsContainer';

import {
  updateCategories,
  updateCheckedElement,
  updateRegions,
  updateRestaurants,
} from './actions';

import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

export default function App() {
  const dispatch = useDispatch();

  const {
    checkedRegion,
    checkedCategory,
    regions,
    categories,
  } = useSelector((state) => ({
    checkedRegion: state.checkedRegion,
    checkedCategory: state.checkedCategory,
    regions: state.regions,
    categories: state.categories,
  }));

  async function loadInitialData() {
    const regionsData = await fetchRegions();
    const categoriesData = await fetchCategories();
    dispatch(updateRegions(regionsData));
    dispatch(updateCategories(categoriesData));
  }

  async function loadRestaurants() {
    if (Object.keys(checkedCategory).length === 0
     || Object.keys(checkedRegion).length === 0) {
      return;
    }
    const { id } = checkedCategory;
    const { text } = checkedRegion;
    const restaurantsData = await fetchRestaurants(text, id);
    dispatch(updateRestaurants(restaurantsData));
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    loadRestaurants();
  }, [checkedRegion, checkedCategory]);

  function handleClickList(name, value) {
    dispatch(updateCheckedElement(name, value));
  }

  return (
    <div>
      <Regions
        regions={regions}
        handleClickRegion={handleClickList}
        checkedElement={checkedRegion}
      />
      <Categories
        categories={categories}
        handleClickCategory={handleClickList}
        checkedElement={checkedCategory}
      />
      <RestaurantsContainer />
    </div>
  );
}
