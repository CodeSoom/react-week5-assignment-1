import configureStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { loadCategories, loadRegions, loadRestaurants } from './asyncActions';
import { setCategories, setRegions, setSelectedRestaurants } from './RestaurantSlice';
import { fetchCategories, fetchRegions, fetchRestaurants } from '../servies/api';

jest.mock('../servies/api');

describe('asyncActions', () => {
  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  describe('loadCategories', () => {
    beforeEach(() => {
      fetchCategories.mockImplementation(async () => [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ]);
    });

    it('fetches categories when being dispatched', async () => {
      await store.dispatch(loadCategories());

      const actions = store.getActions();
      expect(actions[0]).toEqual(setCategories([
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ]));
    });
  });

  describe('loadRegions', () => {
    beforeEach(() => {
      fetchRegions.mockImplementation(
        async () => ['서울', '대전'],
      );
    });

    it('fetches regions when being dispatched', async () => {
      await store.dispatch(loadRegions());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRegions([
        '서울', '대전',
      ]));
    });
  });

  describe('loadRestaurants', () => {
    beforeEach(() => {
      fetchRestaurants.mockImplementation(async () => ['양천주가', '한국식 초밥']);
    });

    it('fetches restuarants when being dispatched', async () => {
      await store.dispatch(loadRestaurants('서울', 1));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setSelectedRestaurants([
        '양천주가',
        '한국식 초밥',
      ]));
    });
  });
});
