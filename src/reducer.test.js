import reducer from './reducer';
import {
  setRegions, setCategories, checkRegion, checkCategory, setRestaurants,
} from './actions';

import regions from './__fixtures__/regions';
import categories from './__fixtures__/categories';
import restaurants from './__fixtures__/restaurants';

describe('reducer', () => {
  const previousState = {
    regions: [],
    categories: [],
    restaurants: [],
    checked: {
      regionId: 4,
      categoryId: 5,
    },
  };

  it('setRegions', () => {
    // when
    const state = reducer(previousState, setRegions(regions));
    // then
    expect(state.regions).toEqual(regions);
  });

  it('setCategories', () => {
    // when
    const state = reducer(previousState, setCategories(categories));
    // then
    expect(state.categories).toEqual(categories);
  });

  it('setRestaurants', () => {
    // when
    const state = reducer(previousState, setRestaurants(restaurants));
    // then
    expect(state.restaurants).toEqual(restaurants);
  });

  it('checkRegion', () => {
    // when
    const state = reducer(previousState, checkRegion(1));
    // then
    expect(state.checked.regionId).toBe(1);
  });

  it('checkCategory', () => {
    // when
    const state = reducer(previousState, checkCategory(1));
    // then
    expect(state.checked.categoryId).toBe(1);
  });
});
