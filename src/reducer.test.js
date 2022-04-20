import reducer from './reducer';

import {
  loadCategories,
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

jest.mock('./services/api');

describe('reducer', () => {
  describe('setCategories', () => {
    it('sets categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('loadCategories', () => {
    it('called with categories data for renders categories', async () => {
      const dispatch = jest.fn();

      await loadCategories()(dispatch);

      expect(dispatch).toBeCalledWith({
        type: 'setCategories',
        payload: {
          categories,
        },
      });
    });
  });
});
