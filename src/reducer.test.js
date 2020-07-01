import reducer from './reducer';
import { setRegions, setCategories } from './actions';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';

describe('reducer', () => {
  const previousState = {
    regions: [],
    categories: [],
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
});
