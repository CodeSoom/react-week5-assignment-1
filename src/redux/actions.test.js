import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../../fixtures/regions';
import categories from '../../fixtures/categories';

import {
  loadRegions,
  setRegions,
  updateLoading,
  setCategories,
  loadCategories,
} from './actions';

jest.mock('../services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  it('loadRegions', async () => {
    await store.dispatch(loadRegions());

    const actions = store.getActions();

    expect(actions).toEqual([
      setRegions(regions),
    ]);
  });

  it('loadCategories', async () => {
    await store.dispatch(loadCategories());

    const actions = store.getActions();

    expect(actions).toEqual([
      setCategories(categories),
    ]);
  });

  it('loadInitialState', async () => {
    await store.dispatch(loadInitialState());

    const actions = store.getActions();

    expect(actions).toContain(updateLoading(true));
    expect(actions).toContain(setCategories(categories));
    expect(actions).toContain(setRegions(regions));
    expect(actions).toContain(updateLoading(false));
  });
});
