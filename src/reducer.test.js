import reducer, { initialState } from './reducer';

import {
  SET_REGIONS,
  SET_CATEGORIES,
  SET_SELECTED_REGION,
  SET_SELECTED_CATEGORY,
  SET_RESTAURANTS,
  setRestaurantRegions,
  setRestaurantCategories,
  setRestaurantRegion,
  setRestaurantCategory,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe(SET_REGIONS, () => {
    it('sets restaurant regions', () => {
      const state = reducer(
        { regions: [] },
        setRestaurantRegions([{ id: 1, name: '서울' }]),
      );

      expect(state.regions).toMatchObject([{ id: 1, name: '서울' }]);
    });
  });

  describe(SET_CATEGORIES, () => {
    it('sets restaurant categories', () => {
      const state = reducer(
        { categories: [] },
        setRestaurantCategories([{ id: 1, name: '한식' }]),
      );

      expect(state.categories).toMatchObject([{ id: 1, name: '한식' }]);
    });
  });

  describe(SET_SELECTED_REGION, () => {
    it('sets restaurant region', () => {
      const state = reducer(
        { selectedRegion: null },
        setRestaurantRegion({ id: 1, name: '서울' }),
      );

      expect(state.selectedRegion).toMatchObject({ id: 1, name: '서울' });
    });
  });

  describe(SET_SELECTED_CATEGORY, () => {
    it('sets selected restaurnat category', () => {
      const state = reducer(
        { selectedCategory: {} },
        setRestaurantCategory({ id: 1, name: '한식' }),
      );

      expect(state.selectedCategory).toMatchObject({ id: 1, name: '한식' });
    });
  });

  describe(SET_RESTAURANTS, () => {
    it('sets restaurants', () => {
      const state = reducer(
        { restaurants: [] },
        setRestaurants([{
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        }]),
      );

      expect(state.restaurants).toMatchObject([{
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      }]);
    });
  });

  context('without any matched type', () => {
    it('returns state', () => {
      // Given
      const previousState = {
        regions: [{ id: 2, name: '대전' }],
        categories: [{ id: 4, name: '양식' }],
        selectedRegion: { id: 2, name: '대전' },
        selectedCategory: { id: 4, name: '양식' },
        restaurants: [{}],
      };
      const action = { type: 'NOTHING' };

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject(previousState);
    });
  });

  context('without state', () => {
    it('use initialState', () => {
      // Given
      const action = { type: null };

      // When
      const state = reducer(undefined, action);

      // Then
      expect(state).toMatchObject(initialState);
    });
  });
});
