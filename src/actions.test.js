import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

import {
  loadLocations,
  setCategories,
  loadCategories,
  setLocations,
  loadRestaurants,
  setRestaurants,
} from './actions';

import {
  fetchCategories,
  fetchLocations,
  fetchRestaurants,
} from './services/api';

const middleWeares = [thunk];
const mockStore = configureStore(middleWeares);

jest.mock('./services/api');

describe('actions test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loadLocations test', async () => {
    const store = mockStore({});

    fetchLocations.mockResolvedValue(locations);

    await store.dispatch(loadLocations());

    const actions = store.getActions();

    expect(actions[0]).toEqual(setLocations(locations));
  });

  it('loadCategories test', async () => {
    const store = mockStore({});

    fetchCategories.mockResolvedValue(categories);

    await store.dispatch(loadCategories());

    const actions = store.getActions();

    expect(actions[0]).toEqual(setCategories(categories));
  });

  it('loadRestaurants test', async () => {
    const store = mockStore({});

    fetchRestaurants.mockResolvedValue(restaurants);

    await store.dispatch(loadRestaurants());

    const actions = store.getActions();

    expect(actions[0]).toEqual(setRestaurants(restaurants));
  });
});
