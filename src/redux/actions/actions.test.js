import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';

import {
  loadInitialState,
} from './asyncActions';

import {
  updateCategoriesLoading,
  setCategories,
} from './categoryActions';

import {
  updateRegionsLoading,
  setRegions,
} from './regionActions';

jest.mock('../services/api');

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

    expect(actions).toContainEqual(updateCategoriesLoading(true));
    expect(actions).toContainEqual(updateRegionsLoading(true));

    expect(actions).toContainEqual(setCategories(categories));
    expect(actions).toContainEqual(setRegions(regions));

    expect(actions).toContainEqual(updateCategoriesLoading(false));
    expect(actions).toContainEqual(updateRegionsLoading(false));
  });
});
