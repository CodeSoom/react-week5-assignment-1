import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import regions from '../fixtures/regions';

import { setRegions } from './actions';
import { loadRegions } from './async-actions';
import { fetchRegions } from './services/api';

jest.mock('./services/api');

const mockStore = configureStore([thunk]);

describe('async-actions', () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  describe('loadRegions', () => {
    it('fetches regions', async () => {
      await store.dispatch(loadRegions());

      expect(fetchRegions).toBeCalled();
    });

    it('dispatches setRegions', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regions));
    });
  });
});
