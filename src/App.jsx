import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  updateCategories,
  updateCheckedCategory,
  updateCheckedRegion,
  updateRegions,
  updateRestaurants,
} from './actions';

import Categories from './Categories';
import Regions from './Regions';
import Restaurants from './Restaurants';

import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export default function App() {
  const {
    checkedRegionText,
    checkedCategoryId,
    regions,
    categories,
    restaurants,
  } = useSelector((state) => ({
    checkedRegionText: state.checkedRegionText,
    checkedCategoryId: state.checkedCategoryId,
    regions: state.regions,
    categories: state.categories,
    restaurants: state.restaurants,
  }));

  const dispatch = useDispatch();

  async function loadInitialData() {
    const regionsData = await fetchRegions();
    const categoriesData = await fetchCategories();
    dispatch(updateRegions(regionsData));
    dispatch(updateCategories(categoriesData));
  }

  async function loadRestaurants() {
    if (checkedRegionText === '' || checkedCategoryId === 0) {
      return;
    }
    const restaurantsData = await fetchRestaurants(checkedRegionText, checkedCategoryId);
    dispatch(updateRestaurants(restaurantsData));
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    loadRestaurants();
  }, [checkedRegionText, checkedCategoryId]);

  function handleClickRegion(e) {
    const { innerText } = e.target;
    const checkedRegion = innerText.split('(')[0];
    dispatch(updateCheckedRegion(checkedRegion));
  }

  function handleClickCategory(e) {
    const { dataset: { id } } = e.target;
    const checkedCategory = parseInt(id, 10);
    dispatch(updateCheckedCategory(checkedCategory));
  }

  return (
    <div>
      <Regions
        regions={regions}
        onClickRegion={handleClickRegion}
        checkedRegionText={checkedRegionText}
      />
      <Categories
        categories={categories}
        onClickCategory={handleClickCategory}
        checkedCategoryId={checkedCategoryId}
      />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
