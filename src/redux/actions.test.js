import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';

import {
  setRegions,
  updateLoading,
  setCategories,
  loadInitialState,
} from './actions';

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

    expect(actions).toContainEqual(updateLoading(true));
    expect(actions).toContainEqual(setCategories(categories));
    expect(actions).toContainEqual(setRegions(regions));
    expect(actions).toContainEqual(updateLoading(false));
  });
});
