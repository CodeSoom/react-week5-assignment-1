import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  setRegions, loadRegions,
  setCategories, loadCategories,
} from './actions';

import { fetchRegions, fetchCategories } from './services/api';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

describe('actions', () => {
  const store = mockStore();

  describe('loadRegions', () => {
    it('fetch regions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(fetchRegions).toBeCalled();
      expect(actions[0]).toEqual(setRegions());
    });
  });

  describe('loadCategories', () => {
    it('fetch categories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(fetchCategories).toBeCalled();
      expect(actions[1]).toEqual(setCategories());
    });
  });
});
