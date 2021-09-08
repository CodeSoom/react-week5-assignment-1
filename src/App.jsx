import { useState, useEffect } from 'react';

import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export default function App() {
  const [initialData, setInitialData] = useState({
    checkedRegionText: '',
    checkedCategoryId: 0,
    regions: [],
    categories: [],
    restaurants: [],
  });

  const {
    checkedRegionText,
    checkedCategoryId,
    regions,
    categories,
    restaurants,
  } = initialData;

  async function loadInitialData() {
    const regionsData = await fetchRegions();
    const categoriesData = await fetchCategories();
    setInitialData({
      ...initialData,
      regions: regionsData,
      categories: categoriesData,
    });
  }

  async function loadRestaurants() {
    if (checkedRegionText === '' || checkedCategoryId === 0) {
      return;
    }
    const restaurantsData = await fetchRestaurants(checkedRegionText, checkedCategoryId);
    setInitialData({
      ...initialData,
      restaurants: [...restaurantsData],
    });
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    loadRestaurants();
  }, [checkedRegionText, checkedCategoryId]);

  function handleClickRegion(e) {
    const { innerText } = e.target;
    setInitialData({
      ...initialData,
      checkedRegionText: innerText.split('(')[0],
    });
  }

  function handleClickCategory(e) {
    const { dataset: { id } } = e.target;
    setInitialData({
      ...initialData,
      checkedCategoryId: parseInt(id, 10),
    });
  }

  return (
    <div>
      <ul>
        {regions
        && regions.map((region) => (<li key={region.id}><button type="button" onClick={handleClickRegion}>{checkedRegionText === region.name ? `${region.name}(V)` : region.name}</button></li>))}
      </ul>
      <ul>
        {categories
        && categories.map((category) => (<li key={category.id}><button type="button" data-id={category.id} onClick={handleClickCategory}>{checkedCategoryId === category.id ? `${category.name}(V)` : category.name}</button></li>))}
      </ul>
      <ul>
        {restaurants
        && restaurants.map((restaurant) => (<li key={restaurant.id}>{restaurant.name}</li>))}
      </ul>
    </div>
  );
}
