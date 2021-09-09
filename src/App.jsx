import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import RegionsContainer from './RegionsContainer';

import {
  updateCategories,
  updateRegions,
  updateRestaurants,
} from './actions';

import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  const {
    checkedRegion,
    checkedCategory,
  } = useSelector((state) => ({
    checkedRegion: state.checkedRegion,
    checkedCategory: state.checkedCategory,
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

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
