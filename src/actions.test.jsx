import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import { categories, regions } from '../fixtures/restaurants';

import { loadCategories, loadRegions, setCategories, setRegions } from './actions';

import { fetchCategories, fetchRegions } from './services/api';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRegions', () => {
    it('지역 데이터를 받아와서 state를 반영한다.', async () => {
      const store = mockStore({});

      fetchRegions.mockResolvedValue(regions);

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toStrictEqual(setRegions(regions));
    });
  });

  describe('loadCategories', () => {
    it('분류 데이터를 받아와서 state를 반영한다.', async () => {
      const store = mockStore({});

      fetchCategories.mockResolvedValue(categories);

      await store.dispatch(loadCategories());

      const actions = store.getActions();

      expect(actions[0]).toStrictEqual(setCategories(categories));
    });
  });
});
