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

  describe('loadRegions', () => {
    it('get setRegions action', async () => {
      const store = mockStore({});

      return store.dispatch(loadRegions())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toBe('setRegions');
        });
    });
  });

  describe('loadCategories', () => {
    it('get setCategories action', async () => {
      const store = mockStore({});

      return store.dispatch(loadCategories())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toBe('setCategories');
        });
    });
  });

  describe('loadRestaurants', () => {
    context('without regionName and categoryId', () => {
      it('get setRestaurants action', async () => {
        const store = mockStore({
          regionName: '서울',
          categoryId: 1,
        });

        return store.dispatch(loadRestaurants())
          .then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toBe('setRestaurants');
          });
      });
    });

    context('without regionName and categoryId', () => {
      it('get setRestaurants action', async () => {
        const store = mockStore({});

        return store.dispatch(loadRestaurants());
      });
    });
  });
});
