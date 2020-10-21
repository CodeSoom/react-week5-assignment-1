import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import {
  fetchRestaurantRegion,
  fetchRestaurantCategories,
  fetchRestaurants,
} from './services/api';
import {
  loadRestaurantRegions,
  loadRestaurantCategories,
  loadRestaurnats,
  setRestaurantRegions,
  setRestaurantCategories,
  setRestaurants,
} from './actions';

jest.mock('./services/api');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  describe('loadRestaurantRegions', () => {
    const regions = [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
      { id: 4, name: '부산' },
      { id: 5, name: '광주' },
      { id: 6, name: '강원도' },
      { id: 7, name: '인천' },
    ];

    fetchRestaurantRegion.mockResolvedValue(regions);

    const store = mockStore({});

    it('dispatches restaurant regions', async () => {
      // When
      await store.dispatch(loadRestaurantRegions());

      // Then
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurantRegions(regions));
    });
  });

  describe('loadRestaurantCategories', () => {
    const categories = [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
      { id: 4, name: '양식' },
      { id: 5, name: '분식' },
      { id: 6, name: '과자' },
      { id: 7, name: '치킨' },
    ];

    fetchRestaurantCategories.mockResolvedValue(categories);

    const store = mockStore({});

    it('dispatches restaurant categories', async () => {
      // When
      await store.dispatch(loadRestaurantCategories());

      // Then
      const actions = store.getActions();

      expect(actions[0]).toEqual(setRestaurantCategories(categories));
    });
  });

  describe('loadRestaurnats', () => {
    const restaurants = [
      {
        id: 3,
        categoryId: 4,
        name: '마법사주방',
        address: '서울 강남구 강남대로94길 9',
        information: '마법사주방 in 서울 강남구 강남대로94길 9',
      },
    ];

    fetchRestaurants.mockResolvedValue(restaurants);

    context('with selected restaurant region and category', () => {
      it('dispatches searched restaurants', async () => {
        // Given
        const store = mockStore({
          selectedRegion: { id: 1, name: '서울' },
          selectedCategory: { id: 4, name: '양식' },
        });

        // When
        await store.dispatch(loadRestaurnats());

        // Then
        const actions = store.getActions();

        expect(actions[0]).toEqual(setRestaurants(restaurants));
      });
    });

    context('without selected restaurant region and category', () => {
      it('returns nothing', async () => {
        // Given
        const store = mockStore({
          selectedRegion: {},
          selectedCategory: {},
        });

        // When
        await store.dispatch(loadRestaurnats());

        // Then
        const actions = store.getActions();

        expect(actions[0]).toEqual(undefined);
      });
    });
  });
});
