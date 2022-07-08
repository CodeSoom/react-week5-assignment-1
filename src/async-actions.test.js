import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import categories from '../fixtures/categories';

import regions from '../fixtures/regions';

import { setCategories, setRegions } from './actions';
import { loadCategories, loadRegions } from './async-actions';
import { fetchCategories, fetchRegions } from './services/api';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

describe('async-actions', () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  describe('loadRegions', () => {
    it('fetches regions', async () => {
      await store.dispatch(loadRegions());

      expect(fetchRegions).toBeCalled();
    });

    it('dispatches setRegions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('fetches categories', async () => {
      await store.dispatch(loadCategories());

      expect(fetchCategories).toBeCalled();
    });

    it('dispatches setCategories', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categories));
    });
  });
});
