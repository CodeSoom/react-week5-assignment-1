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
    it('async "loadRestaurantsName" call test', async () => {
      fetchRestaurantsName.mockResolvedValue(restaurantFixture);

      const store = mockStore({});

      await store.dispatch(loadRestaurantsName({ region: '서울', category: 1 }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurantsName(restaurantFixture));
    });
  });
});
