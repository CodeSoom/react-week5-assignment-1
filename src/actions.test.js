import configureStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import {
  loadRegions, loadRestaurants, loadCategories,
} from './actions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('actions', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  context('when loadRegions is dispatched', () => {
    it('get setRegions action', async () => {
      const store = mockStore({});

      return store.dispatch(loadRegions())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toBe('setRegions');
        });
    });
  });

  context('when loadCategories is dispatched', () => {
    it('get setCategories action', async () => {
      const store = mockStore({});

      return store.dispatch(loadCategories())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toBe('setCategories');
        });
    });
  });

  context('when loadRestaurants is dispatched', () => {
    it('get setRestaurants action', async () => {
      const store = mockStore({});

      return store.dispatch(loadRestaurants({
        regionName: '서울',
        categoryId: 1,
      }))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toBe('setRestaurants');
        });
    });
  });
});
