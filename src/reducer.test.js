import reducer from './reducer';

import {
  checkCategory,
  checkRegion,
  setRegions,
  setCategories,
  setRestaurantsList,
} from './actions';

import categories from './fixtures/cetegories';
import regions from './fixtures/regions';
import restaurants from './fixtures/restaurants';

test('reducer', () => {
  const state = {
    categories: [],
    regions: [],
    checkedCategoryId: undefined,
    checkedRegion: '',
    restaurantsList: [],
  };

  expect(reducer(undefined, { type: undefined })).toStrictEqual(state);
  expect(reducer(state, setRegions(regions)).regions).toHaveLength(regions.length);
  expect(reducer(state, setCategories(categories)).categories).toHaveLength(categories.length);
  expect(reducer(state, checkCategory(1)).checkedCategoryId).toBe(1);
  expect(reducer(state, checkRegion(1)).checkedRegion).toBe(1);
  expect(reducer(state, setRestaurantsList(restaurants)).restaurantsList)
    .toHaveLength(restaurants.length);
});
