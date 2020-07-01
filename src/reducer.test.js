import reducer from './reducer';
import {
  setRegions, setCategories, checkRegion, checkCategory, setRestaurants,
} from './actions';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';
import restaurantsFixture from './__fixtures__/restaurants';

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
    const regions = regionsFixture;
    const action = setRegions(regions);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.regions).toEqual(regions);
  });

  it('setCategories', () => {
    // given
    const categories = categoriesFixture;
    const action = setCategories(categories);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.categories).toEqual(categories);
  });

  it('setRestaurants', () => {
    // given
    const restaurants = restaurantsFixture;
    const action = setRestaurants(restaurants);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.restaurants).toEqual(restaurants);
  });

  it('checkRegion', () => {
    // given
    const id = 1;
    const action = checkRegion(id);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.checked.regionId).toBe(id);
  });

  it('checkCategory', () => {
    // given
    const id = 1;
    const action = checkCategory(id);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.checked.categoryId).toBe(id);
  });
});
