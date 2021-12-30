import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  checkCategory, checkRegion, loadCategories, loadRegions,
} from './actions';

import restaurants from './fixtures/restaurants';

const filteredRestaurant = restaurants.filter(
  (restaurant) => restaurant.categoryId === (1)
    && restaurant.address.includes('서울'),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  const {
    regions, categories, checkedCategory, checkedRegion,
  } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
    checkedCategory: state.checkedCategory,
    checkedRegion: state.checkedRegion,
  }));

  function handleRegionClick(event) {
    const { value } = event.target;
    dispatch(checkRegion(value));
  }
  function handleCategoryClick(event) {
    const { value } = event.target;
    dispatch(checkCategory(value));
  }

  return (
    <>
      {regions.map((region) => {
        const name = checkedRegion === region.id ? `${region.name}✅` : region.name;
        return (
          <button name="region" type="button" key={region.id} value={region.id} onClick={handleRegionClick}>
            {
              name
            }
          </button>
        );
      })}
      <hr />
      {categories.map((category) => {
        const name = checkedCategory === category.id ? `${category.name}✅` : category.name;
        return (
          <button name="category" type="button" key={category.id} value={category.id} onClick={handleCategoryClick}>
            {
              name
            }
          </button>
        );
      })}

      <ul>
        {
          filteredRestaurant.map((restaurant) => (<li key={restaurant.id}>{restaurant.name}</li>))
        }
      </ul>
    </>
  );
}
