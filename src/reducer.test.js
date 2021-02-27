import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
  setCategories,
  setSelectedCatId,
  setRegions,
  setSelectedRegionId,
} from './actions';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  context('without an action', () => {
    it('returns state', () => {
      const initialState = {
        newId: 100,
        restaurants: [],
        restaurant: {
          name: '',
          category: '',
          address: '',
        },
        categories: [],
        selectedCatId: 0,
        regions: [],
        selectedRegionId: 0,
      };

      const state = reducer();

      expect(state).toEqual(initialState);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
      };
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });
  describe('setRegions', () => {
    it('changes regions array', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];

      const initialState = {
        regions: [],
      };
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });
  describe('changeRestaurantField', () => {
    it('changes restaurant form', () => {
      const initialState = {
        name: '이름',
        category: '분류',
        address: '주소',
      };

      const state = reducer(initialState, changeRestaurantField({
        name: 'name',
        value: '서울시 강남구 역삼동',
      }));

      expect(state.restaurant.name).toBe('서울시 강남구 역삼동');
    });
  });

  describe('addRestaurant', () => {
    it('append restaurant into restaurants and clear restaurant form', () => {
      const initialState = {
        newId: 101,
        restaurants: [],
        restaurant: {
          name: '마법사주방',
          category: '이탈리아',
          address: '서울시 강남구 역삼동',
        },
      };

      const state = reducer(initialState, addRestaurant());
      expect(state.restaurants).toHaveLength(1);

      const restaurant = state.restaurants[state.restaurants.length - 1];
      expect(restaurant.id).toBe(101);
      expect(restaurant.name).toBe('마법사주방');
      expect(state.restaurants[0].id).toBe(101);
      expect(state.restaurant.name).toBe('');
      expect(state.newId).toBe(102);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];
      const initialState = {
        categoreis: [],
      };
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setSelectedCatId', () => {
    it('changes setSelectedCatId', () => {
      const selectedCatId = 1;
      const initialState = {
        selectedCatId: 0,
      };
      const state = reducer(initialState, setSelectedCatId(selectedCatId));

      expect(state.selectedCatId).toBe(1);
    });
  });

  describe('setSelectedRegionId', () => {
    it('changes setSelectedRegionId', () => {
      const selectedRegionId = 1;
      const initialState = {
        selectedRegionId: 0,
      };
      const state = reducer(initialState, setSelectedRegionId(selectedRegionId));

      expect(state.selectedRegionId).toBe(1);
    });
  });
});
