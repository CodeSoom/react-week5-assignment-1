import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loadCategories, loadRegions, loadRestaurants } from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectCategoryId: null,
  selectRegionId: null,
};

describe('laodRegions', () => {
  it('runs setRegions', async () => {
    const store = mockStore(initialState);

    await store.dispatch(loadRegions());
    const actions = store.getActions();

    expect(actions[0].type).toBe('setRegions');
    expect(actions[0].payload.regions).not.toBeUndefined();
  });
});

describe('laodCategories', () => {
  it('runs setCategories', async () => {
    const store = mockStore(initialState);

    await store.dispatch(loadCategories());
    const actions = store.getActions();

    expect(actions[0].type).toBe('setCategories');
    expect(actions[0].payload.categories).not.toBeUndefined();
  });
});

describe('laodRestaurants', () => {
  it('runs setRestaurants', async () => {
    const store = mockStore(initialState);

    await store.dispatch(loadRestaurants({
      selectCategoryId: 1,
      selectRegionId: 1,
    }));
    const actions = store.getActions();

    expect(actions[0].type).toBe('setRestaurants');
    expect(actions[0].payload.restaurants).not.toBeUndefined();
  });
});
