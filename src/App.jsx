import { useState, useEffect } from 'react';
import Categories from './Categories';
import Regions from './Regions';
import Restaurants from './Restaurants';

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
