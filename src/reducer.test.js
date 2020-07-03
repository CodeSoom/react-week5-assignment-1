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
    // given
    const action = setRegions(regions);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.regions).toEqual(regions);
  });

  it('setCategories', () => {
    // given
    const action = setCategories(categories);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.categories).toEqual(categories);
  });

  it('setRestaurants', () => {
    // given
    const action = setRestaurants(restaurants);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.restaurants).toEqual(restaurants);
  });

  it('checkRegion', () => {
    // given
    const action = checkRegion(1);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.checked.regionId).toBe(1);
  });

  it('checkCategory', () => {
    // given
    const action = checkCategory(1);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.checked.categoryId).toBe(1);
  });
});
