import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  setCategories, loadCategories,
} from './actions';

import { regions, categories } from '../__fixtures__/data';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

describe('actions', () => {
  const store = mockStore();

  describe('loadCategories', () => {
    it('fetch categories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.setCategories();

      expect(actions[0]).toBe(setCategories(categories));
    });
  });
});
