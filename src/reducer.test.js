import reducer from './reducer';
import {
  setRegions, setCategories, checkRegion, checkCategory,
} from './actions';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';

describe('reducer', () => {
  const previousState = {
    regions: [],
    categories: [],
    checked: {
      region: 4,
      category: 5,
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

  it('checkRegion', () => {
    // given
    const id = 1;
    const action = checkRegion(id);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.checked.region).toBe(id);
  });

  it('checkCategory', () => {
    // given
    const id = 1;
    const action = checkCategory(id);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.checked.category).toBe(id);
  });
});
