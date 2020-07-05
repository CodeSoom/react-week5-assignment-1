import reducer from './reducer';

import {
  changeRegion, setCategories, setRestaurants, setRegions,
} from './actions';

describe('reducer', () => {
  describe('changeRegion', () => {
    context('when with name', () => {
      it('returns state with selected region', () => {
        const state = reducer({
          region: null,
        }, changeRegion({ id: 1, name: '서울' }));

        expect(state.region.name).toBe('서울');
        expect(state.region.id).toBe(1);
      });
    });
  });

  describe('changeCategory', () => {
    context('when with name', () => {
      it('returns state with selected category', () => {
        const state = reducer({
          region: null,
        }, changeRegion({ id: 1, name: '한식' }));

        expect(state.region.name).toBe('한식');
        expect(state.region.id).toBe(1);
      });
    });
  });

  describe('setCategories', () => {
    it('returns state with categories', () => {
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

      const state = reducer({
        categories: [],
      }, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  describe('setRegions', () => {
    it('returns state with regions', () => {
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

      const state = reducer({
        regions: [],
      }, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });

  describe('setRestaurants', () => {
    it('returns state with restaurants', () => {
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

      const state = reducer({
        restaurants: [],
      }, setRestaurants(restaurants));

      expect(state.restaurants).toEqual(restaurants);
    });
  });

  describe('without action', () => {
    it('returns original state', () => {
      const state = reducer({
        region: null,
      }, {
        type: 'WOW',
      });

      expect(state.region).toBeNull();
    });
  });

  describe('without state', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, changeRegion({ id: 1, name: '서울' }));

      expect(state.region.name).toBe('서울');
      expect(state.region.id).toBe(1);
      expect(state.category).toBeNull();
    });
  });
});
