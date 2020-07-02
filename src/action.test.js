import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import { loadRegions, setInitRegions } from './action';

import { regions, categories } from '../__fixture__/data';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(regions),
}));

describe('acton', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('loadRegions', () => {
    it('load Regions', () => {
      const store = mockStore({});

      return store.dispatch(loadRegions()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setInitRegions(regions));
      });
    });
  });

  describe('loadCategories', () => {
    it('load Categories', () => {
      const store = mockStore({});

      return store.dispatch(loadCategories()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setInitCategories(categories));
      });
    });
  });





});
