import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadCategories } from './action';

import { fetchCategories } from './services/api';

import { CATEGORIES } from './fixture';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);
fetchCategories.mockResolvedValue(CATEGORIES);

describe('actions', () => {
  describe('loadCategories', () => {
    it('setCategories를 호출한다 ', async () => {
      const store = mockStore({});

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0].payload.categories).toEqual(CATEGORIES);
    });
  });
});
