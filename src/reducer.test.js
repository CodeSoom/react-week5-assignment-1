import reducer from './reducer';

import {
  setRegions,
  setCategories,
} from './actions';

describe('reducer', () => {
  it('Regions이 보여진다', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const initialState = {
      regions: [],
    };

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(1);
  });

  it('Categories이 보여진다', () => {
    const categories = [
      { id: 1, name: '한식' },
    ];

    const initialState = {
      categories: [],
    };

    const state = reducer(initialState, setCategories(categories));

    expect(state.categories).toHaveLength(1);
  });
});
