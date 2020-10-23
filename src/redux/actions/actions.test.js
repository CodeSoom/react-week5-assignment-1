import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';
import restaurants from '../../../fixtures/restaurants';

import {
  loadInitialState,
  loadRestaurants,
  updateCategoriesLoading,
  updateRegionsLoading,
  updateRestaurantsLoading,
  setCategories,
  setRegions,
  setRestaurants,
} from './index';

jest.mock('../../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadInitialState', () => {
    const store = mockStore({});

    it('update loading states, set categories and regions', async () => {
      await store.dispatch(loadInitialState());

      const actions = store.getActions();

      const expectedActions = [
        updateCategoriesLoading(true),
        updateRegionsLoading(true),

        setCategories(categories),
        setRegions(regions),

        updateCategoriesLoading(false),
        updateRegionsLoading(false),
      ];

      expectedActions.forEach((action) => {
        expect(actions).toContainEqual(action);
      });
    });
  });

  describe('loadRestaurants', () => {
    context('when both category and region are selected', () => {
      const store = mockStore({
        region: { selectedName: '서울' },
        category: { selectedId: 1 },
      });

      it('update loading state and set restaurants', async () => {
        await store.dispatch(loadRestaurants());

        const actions = store.getActions();

        expect(actions).toEqual([
          updateRestaurantsLoading(true),

          setRestaurants(restaurants),

          updateRestaurantsLoading(false),
        ]);
      });
    });

    context('when no region is selected', () => {
      const store = mockStore({
        region: { selectedName: '' },
        category: { selectedId: 1 },
      });

      it('no action is dispatched', async () => {
        await store.dispatch(loadRestaurants());

        expect(store.getActions()).toEqual([]);
      });
    });

    context('when no category is selected', () => {
      const store = mockStore({
        region: { selectedName: '서울' },
        category: { selectedId: null },
      });

      it('no action is dispatched', async () => {
        await store.dispatch(loadRestaurants());

        expect(store.getActions()).toEqual([]);
      });
    });
  });
});
