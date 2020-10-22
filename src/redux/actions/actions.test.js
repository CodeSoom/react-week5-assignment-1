import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';
import restaurants from '../../../fixtures/restaurants';

import {
  loadInitialState,
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
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  test('loadInitialState', async () => {
    await store.dispatch(loadInitialState());

    const actions = store.getActions();

    expect(actions).toIncludeSameMembers([
      updateCategoriesLoading(true),
      updateRegionsLoading(true),

      setCategories(categories),
      setRegions(regions),

      updateCategoriesLoading(false),
      updateRegionsLoading(false),
    ]);
  });

  test('loadRestaurants', async () => {
    await store.dispatch(loadRestaurants());

    const actions = store.getActions();

    expect(actions).toEqual([
      updateRestaurantsLoading(true),

      setRestaurants(restaurants),

      updateRestaurantsLoading(false),
    ]);
  });
});
