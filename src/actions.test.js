import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import regions from '../fixtures/regions';

import {
  loadRegions,
  setRegions,
  updateLoading,
} from './actions';

jest.mock('./service/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('loadRegions', async () => {
  const store = mockStore({});

  await store.dispatch(loadRegions());

  const actions = store.getActions();

  expect(actions).toEqual([
    updateLoading(true),
    setRegions(regions),
    updateLoading(false),
  ]);
});
