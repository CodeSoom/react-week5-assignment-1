import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../__fixtures__/regions';

import {
  fetchRegions,
} from './services/api';

import {
  loadRegions,
  setRegions,
} from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRegions', () => {
    it('dispatches fetched regions data', async () => {
      fetchRegions.mockResolvedValue(regions);

      const store = mockStore({});

      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });
});
