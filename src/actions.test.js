import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadRegions,
  loadCategories,
  loadRestaurants,
} from './actions';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

import regions from './__fixture__/regions';
import categories from './__fixture__/categories';
import restaurants from './__fixture__/restaurants';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    fetchRegions.mockResolvedValue(regions);
    fetchCategories.mockResolvedValue(categories);
    fetchRestaurants.mockResolvedValue(restaurants);
  });

  describe('loadRegions', () => {
    const store = mockStore({ regions: [] });

    it('creates setRegions when fetching regions has been done', async () => {
      const expectedActions = [
        {
          type: 'setRegions',
          payload: {
            regions,
          },
        },
      ];

      await store.dispatch(loadRegions());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('loadCategories', () => {
    const store = mockStore({ categories: [] });

    it('creates setCategories when fetching categories has been done', async () => {
      const expectedActions = [
        {
          type: 'setCategories',
          payload: {
            categories,
          },
        },
      ];

      await store.dispatch(loadCategories());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('loadRestaurants', () => {
    const store = mockStore({ restaurants: [] });

    it('creates loadRestaurants when fetching restaurants has been done', async () => {
      const expectedActions = [
        {
          type: 'setRestaurants',
          payload: {
            restaurants,
          },
        },
      ];

      await store.dispatch(loadRestaurants('서울', 1));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
