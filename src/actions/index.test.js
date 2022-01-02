import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  loadRegions, loadCategories, loadRestaurants, setRegions, setCategories, setRestaurants,
} from '.';
import { regionsData, categoriesData, restaurantsData } from '../fixtures';
import { fetchRestaurants } from '../services/api';

const mockStore = configureStore([thunk]);

jest.mock('../services/api');

describe('actions', () => {
  describe('loadRegions', () => {
    it('지역 정보를 가져온다.', async () => {
      const store = mockStore({});
      await store.dispatch(loadRegions());
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions(regionsData));
    });
  });

  describe('loadCategories', () => {
    it('카테고리 정보를 가져온다.', async () => {
      const store = mockStore({});
      await store.dispatch(loadCategories());
      const actions = store.getActions();

      expect(actions[0]).toEqual(setCategories(categoriesData));
    });
  });

  describe('loadRestaurants', () => {
    fetchRestaurants.mockImplementation(() => ({
      id: restaurantsData[0].id,
      name: restaurantsData[0].name,
    }));

    it('식당 정보를 가져온다.', async () => {
      const regionName = '서울';
      const categoryId = 1;

      const expectedRestaurantData = {
        id: restaurantsData[0].id,
        name: restaurantsData[0].name,
      };

      const store = mockStore({});
      await store.dispatch(loadRestaurants({ regionName, categoryId }));
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurants(expectedRestaurantData));
    });
  });
});
