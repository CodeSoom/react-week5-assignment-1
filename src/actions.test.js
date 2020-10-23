import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  loadRestaurants, setRestaurants, setRestaurantsName, loadRestaurantsName,
} from './actions';
import { categoriesFixture, restaurantFixture } from '../fixtures/fixtures';
import { fetchRestaurants, fetchRestaurantsName } from './services/api';

jest.mock('./services/api');

const middlewares = [thunk]; // NOTE: thunk 미들웨어 추가
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRestaurants', () => {
    it('async "loadRestaurants" call test', async () => {
      // NOTE: mockResolvedValue 비동기 테스트에서 비동기 함수를 모의하는 데 유용
      fetchRestaurants.mockResolvedValue(categoriesFixture);

      const store = mockStore({});

      await store.dispatch(loadRestaurants('categories'));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants({ type: 'categories', info: categoriesFixture }));
    });
  });

  describe('loadRestaurantsName', () => {
    context('with store', () => {
      it('async "loadRestaurantsName" call success', async () => {
        fetchRestaurantsName.mockResolvedValue(restaurantFixture);

        const store = mockStore({ region: '서울', category: 1 });

        await store.dispatch(loadRestaurantsName());

        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurantsName(restaurantFixture));
      });
    });
    context('without store', () => {
      it('async "loadRestaurantsName" call return null', async () => {
        fetchRestaurantsName.mockResolvedValue(restaurantFixture);

        const store = mockStore({ region: null, category: null });

        await store.dispatch(loadRestaurantsName());

        const actions = store.getActions();

        expect(actions).toEqual([]);
      });
    });
  });
});
