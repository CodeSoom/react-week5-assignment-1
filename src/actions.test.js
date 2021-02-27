import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';

import {
  loadLocations,
  setCategories,
  loadCategories,
  setLocations,
} from './actions';

import {
  fetchCategories,
  fetchLocations,
} from './services/api';

const middleWeares = [thunk];
const mockStore = configureStore(middleWeares);

jest.mock('./services/api');

describe('actions test', () => {
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
});
