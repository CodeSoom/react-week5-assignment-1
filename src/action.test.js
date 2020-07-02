import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadRegions, setInitRegions, loadCategories, setInitCategories,
} from './action';

import { regions, categories } from '../__fixture__/data';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

function mockfetch(data) {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });
}

describe('acton', () => {
  describe('loadRegions', () => {
    it('load Regions', () => {
      const store = mockStore({});

      mockfetch(regions);

      return store.dispatch(loadRegions()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setInitRegions(regions));
      });
    });
  });

  describe('loadCategories', () => {
    it('load Categories', () => {
      const store = mockStore({});

      mockfetch(categories);

      return store.dispatch(loadCategories()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setInitCategories(categories));
      });
    });
  });
});
