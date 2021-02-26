import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import locations from '../fixtures/locations';

import {
  loadLocations,
} from './actions';

const middleWeares = [thunk];
const mockStore = configureStore(middleWeares);

jest.mock('./services/api');
const fetchLocationsMock = require('./services/api');

describe('actions test', () => {
  it('loadLocations test', async () => {
    const store = mockStore({});

    fetchLocationsMock.mockResolvedValue(locations);

    fetchLocationsMock();

    await store.dispatch(loadLocations());

    const actions = store.getActions();

    expect(fetchLocationsMock).toBeCalledWith('https://eatgo-customer-api.ahastudio.com/regions');

    expect(actions[0]).toEqual(locations);
  });
});
