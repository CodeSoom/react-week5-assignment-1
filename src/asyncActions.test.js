import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  categories,
  regions,
  restaurants,
} from '../fixtures/fixtures';

import {
  loadCategories,
  loadRestaurants,
  setRestaurants,
  setOptions,
  loadRegions,
} from './actions';

import {
  fetchRestaurants,
  fetchOptions,
} from './services/api';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('./services/api');

describe('async action', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadRestaurants', () => {
    it('set restaurants from server', async () => {
      fetchRestaurants.mockImplementation(() => (restaurants));

      const store = mockStore({});

      store.dispatch(
        loadRestaurants({ name: '서울', categoryId: 1 }),
      ).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });
  });

  describe('loadCategories', () => {
    it('set categories from server', async () => {
      fetchOptions.mockImplementation(() => (categories));

      const store = mockStore({});

      store.dispatch(

        loadCategories(),

      ).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(
          setOptions({ optionName: 'categories', values: categories }),
        );
      });
    });
  });

  describe('loadRegions', () => {
    it('set regions from server', async () => {
      fetchOptions.mockImplementation(() => (regions));

      const store = mockStore({});

      store.dispatch(

        loadRegions(),

      ).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(
          setOptions({ optionName: 'regions', values: regions }),
        );
      });
    });
  });
});
