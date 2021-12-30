import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  checkCategory, checkRegion, loadCategories, loadRegions,
} from './actions';

import restaurants from './fixtures/restaurants';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  const {
    restaurantsList, regions, categories, checkedCategory, checkedRegion,
  } = useSelector((state) => ({
    restaurantsList: state.restaurantsList,
    regions: state.regions,
    categories: state.categories,
    checkedCategory: state.checkedCategory,
    checkedRegion: state.checkedRegion,
  }));

  const filteredRestaurant = restaurants[checkedCategory || 0][checkedRegion || 0];

  function handleRegionClick(event) {
    const { value } = event.target;
    console.log(value);
    dispatch(checkRegion(value));
  }
  function handleCategoryClick(event) {
    const { value } = event.target;
    dispatch(checkCategory(value));
  }

  return (
    <>
      {regions && regions.map((region) => {
        console.log(checkedRegion === region.id);
        const name = checkedRegion === region.id ? `${region.name}✅` : region.name;
        console.log(checkedRegion === region.id, name);
        return (
          // <div>{name}</div>
          <button name="region" type="button" key={region.id} value={region.id} onClick={handleRegionClick}>
            {
              name
            }
          </button>
        );
      })}
      <hr />
      {categories && categories.map((category) => {
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
