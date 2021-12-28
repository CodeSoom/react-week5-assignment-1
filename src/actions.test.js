import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadCategories, loadRegions } from './actions';

import { fetchCategories, fetchRegions } from './services/api';

import { CATEGORIES, REGIONS } from './fixtures';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

fetchCategories.mockResolvedValue(CATEGORIES);
fetchRegions.mockResolvedValue(REGIONS);

describe('actions', () => {
  describe('loadCategories', () => {
    it('setCategories를 호출한다 ', async () => {
      const store = mockStore({});
      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0].payload.categories).toEqual(CATEGORIES);
    });
  });

  describe('loadRegions', () => {
    it('setRegions를 호출한다', async () => {
      const store = mockStore({});
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0].payload.regions).toEqual(REGIONS);
    });
  });
});
