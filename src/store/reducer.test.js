import { setCategories, setRegions } from './actions';
import reducer from './reducer';
import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역 리스트를 바꾼다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(3);
    });
  });

  describe('setCategories', () => {
    it('카테고리 리스트를 바꾼다.', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(3);
    });
  });

  describe('setRestaurants', () => {
    it('레스토랑 리스트를 바꾼다.', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRegions(restaurants));

      expect(state.regions).toHaveLength(3);
    });
  });
});
