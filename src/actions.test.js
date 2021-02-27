import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import locations from '../fixtures/locations';

import {
  loadLocations,
  setLocations,
} from './actions';

import {
  fetchLocations,
} from './services/api';

const middleWeares = [thunk];
const mockStore = configureStore(middleWeares);

jest.mock('./services/api');
// const fetchLocationsMock = require('./services/api');

describe('actions test', () => {
  it('loadLocations test', async () => {
    const store = mockStore({});

    fetchLocations.mockResolvedValue(locations);

    await store.dispatch(loadLocations());

    const actions = store.getActions();

    expect(actions[0]).toEqual(setLocations(locations));

    expect(fetchLocations).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/regions');
  });
});
