import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  loadRestaurants, setRestaurants, setRestaurantsName, loadRestaurantsName,
} from './actions';
import { categoriesInfo, restaurantsInfo } from '../fixtures/fixtures';
import { fetchRestaurants, fetchRestaurantsName } from './services/api';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRestaurants', () => {
    it('async "loadRestaurants" call test', async () => {
      fetchRestaurants.mockResolvedValue(categoriesInfo);

      const store = mockStore({});

      await store.dispatch(loadRestaurants('categories'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants({ type: 'categories', info: categoriesInfo }));
    });
  });

  describe('loadRestaurantsName', () => {
    context('with store', () => {
      it('async "loadRestaurantsName" call success', async () => {
        fetchRestaurantsName.mockResolvedValue(restaurantsInfo);

        const store = mockStore({ region: '서울', category: 1 });

        await store.dispatch(loadRestaurantsName());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurantsName(restaurantsInfo));
      });
    });
    context('without store', () => {
      it('async "loadRestaurantsName" call return null', async () => {
        fetchRestaurantsName.mockResolvedValue(restaurantsInfo);

        const store = mockStore({ region: null, category: null });

        await store.dispatch(loadRestaurantsName());

        const actions = store.getActions();

        expect(actions).toEqual([]);
      });
    });
  });
});
