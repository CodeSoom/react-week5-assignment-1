import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../../__fixtures__/regions';
import categories from '../../__fixtures__/categories';
import restaurants from '../../__fixtures__/restaurants';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

import {
  getRegions,
  getCategories,
  getRestaurants,
  setCategories,
  setRegions,
  setRestaurants,
} from './actions';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Actions', () => {
  describe('getRegions', () => {
    it('dispatch regions', async () => {
      fetchRegions.mockResolvedValue(regions);

      const store = mockStore({});

      await store.dispatch(getRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });

  describe('getCategories', () => {
    fetchCategories.mockResolvedValue(categories);

    const store = mockStore({});

    it('update geting state and set categories', async () => {
      await store.dispatch(getCategories());

      expect(store.getActions()).toEqual([
        setCategories(categories),
      ]);
    });
  });

  describe('getRestaurants', () => {
    fetchRestaurants.mockResolvedValue(restaurants);

    const store = mockStore({});

    it('update geting state and set restaurants', async () => {
      await store.dispatch(getRestaurants());

      expect(store.getActions()).toEqual([
        setRestaurants(restaurants),
      ]);
    });
  });

  describe('searchRestaurants', () => {
    context('when both category and region are selected', () => {
      const store = mockStore({
        selected: {
          region: '서울',
          category: '1',
        },
      });

      it('get restaurants', async () => {
        await store.dispatch(getRestaurants());

        expect(store.getActions()[0]).toEqual(
          setRestaurants([]),
        );
      });
    });

    context('when no region is selected', () => {
      const store = mockStore({
        selected: {
          region: '',
          category: 1,
        },
      });

      it('no action is dispatched', async () => {
        await store.dispatch(getRestaurants());

        expect(store.getActions()).toEqual([]);
      });
    });

    context('when no category is selected', () => {
      const store = mockStore({
        selected: {
          region: '서울',
          category: '',
        },
      });

      it('no action is dispatched', async () => {
        await store.dispatch(getRestaurants());

        expect(store.getActions()).toEqual([{
          payload: { restaurants: [] },
          type: 'setRestaurants',
        }]);
      });
    });
  });
});
