import reducer from './reducer';

import {
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  describe('setCategories', () => {
    const initailState = {
      categories: [],
    };

    const state = reducer(initailState, setCategories(categories));

    expect(state).not.toHaveLength(0);
  });
});
