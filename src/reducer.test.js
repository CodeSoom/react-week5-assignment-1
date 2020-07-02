import reducer from './reducer';

import {
  setRegions,
  setCategories,
} from './actions';

const initialState = {
  regions: [],
  categories: [],
};

describe('reducer', () => {
  it('set restaurant region into regions', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(1);
  });

  it('set restaurant category into categorys', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];

    const state = reducer(initialState, setCategories(categories));
    expect(state.categories).toHaveLength(1);
  });
});
