import reducer from './reducer';

import { changeRegion, setCategories, setRestaurants } from './actions';

describe('reducer', () => {
  describe('changeRegion', () => {
    context('when with name', () => {
      it('returns state with selected region', () => {
        const initialState = {
          region: '',
        };

        const state = reducer(initialState, changeRegion({ name: '서울' }));

        expect(state.region).toBe('서울');
      });
    });
  });

  describe('changeCategory', () => {
    context('when with name', () => {
      it('returns state with selected category', () => {
        const initialState = {
          category: '',
        };

        const state = reducer(initialState, changeRegion({ name: '한식' }));

        expect(state.region).toBe('한식');
      });
    });
  });

  describe('setCategories', () => {
    it('returns state with categories', () => {
      const initialState = {
        categories: [],
      };
      const categories = [
        {
          id: 1,
          name: '한식',
        },
        {
          id: 2,
          name: '중식',
        },
      ];
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setRegions', () => {
    it('returns state with regions', () => {
      const initialState = {
        regions: [],
      };
      const regions = [
        {
          id: 1,
          name: '서울',
        },
        {
          id: 2,
          name: '인천',
        },
      ];
      const state = reducer(initialState, setCategories(regions));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setRestaurants', () => {
    it('returns state with restaurants', () => {
      const initialState = {
        restaurants: [],
      };
      const restaurants = [
        {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구',
          information: '양천주가 in 서울 강남구',
        },
        {
          id: 6,
          categoryId: 1,
          name: '한국식 초밥',
          address: '서울 강남구',
          information: '한국식 초밥 in 서울 강남구',
        },
      ];
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(2);
    });
  });
});
