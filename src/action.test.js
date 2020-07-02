import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import { loadRegions, setInitRegions } from './action';

import { regions, categories } from '../__fixture__/data';

import { fetchInitCategories } from './services/api';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

function mockfetch(data) {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });
}

function setInitCategories(initCategories) {
  return {
    type: 'setInitCategories',
    payload: {
      regions: initCategories,
    },
  };
}

function loadCategories() {
  return async (dispatch) => {
    const initCategories = await fetchInitCategories();
    dispatch(setInitCategories(initCategories));
  };
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
