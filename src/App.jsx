import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  checkCategory,
  checkRegion,
  loadCategories,
  loadRegions,
  loadRestaurantsList,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  const {
    restaurantsList, regions, categories, checkedCategoryId, checkedRegion,
  } = useSelector((state) => ({
    restaurantsList: state.restaurantsList,
    regions: state.regions,
    categories: state.categories,
    checkedCategoryId: state.checkedCategoryId,
    checkedRegion: state.checkedRegion,
  }));

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
    dispatch(loadRestaurantsList(checkedRegion, checkedCategoryId));
  }, [checkedCategoryId, checkedRegion]);

  function handleRegionClick(event) {
    const regionName = event.target.value;
    dispatch(checkRegion(regionName));
  }

  function handleCategoryClick(event) {
    const categoryId = event.target.value;
    dispatch(checkCategory(categoryId));
  }

  return (
    <>
      <ul>
        {regions.map((region) => {
          const name = checkedRegion === region.name ? `${region.name}(V)` : region.name;

          return (
            <li key={region.id}>
              <button
                type="button"
                value={region.name}
                onClick={handleRegionClick}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <ul>
        {categories.map((category) => {
          const name = checkedCategoryId === category.id ? `${category.name}(V)` : category.name;

          return (
            <li key={category.id}>
              <button
                type="button"
                value={category.id}
                onClick={handleCategoryClick}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <ul>
        {
          restaurantsList.map(
            (restaurant) => (
              <li key={restaurant.id}>
                {restaurant.name}
              </li>
            ),
          )
        }
      </ul>
    </>
  );
}
