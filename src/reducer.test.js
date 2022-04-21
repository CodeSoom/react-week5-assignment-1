import reducer from './reducer';

import {
  loadCategories,
  selectCategory,
  setCategories,
} from './actions';

import categories from '../fixtures/categories';

jest.mock('./services/api');

beforeEach(() => {
  jest.clearAllMocks();
});

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
    it('called with categories data', async () => {
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

  describe('selectCategory', () => {
    it('selects category', () => {
      const initialState = {
        selectedCategoryID: null,
      };

      const state = reducer(initialState, selectCategory(1));

      // 왜 state.selectedCategoryID 값이 undefined가 나오지???
      expect(state.selectedCategoryID).toStrictEqual(1);
    });
  });
});
