import reducer from '.';
import { setRegions, setCategories, setRestaurants } from '../actions';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
    restaurants: [],
  };

  describe('setRegions', () => {
    it('새로운 지역을 저장한다.', () => {
      const regions = [{ id: 1, name: '서울' }];

      const state = reducer(initialState, setRegions(regions));

      expect(regions).toHaveLength(1);
      expect(state.regions[0].id).toBe(1);
      expect(state.regions[0].name).toBe('서울');
    });
  });

  describe('setCategories', () => {
    it('새로운 카테고리를 저장한다.', () => {
      const categories = [{ id: 1, name: '한식' }];

      const state = reducer(initialState, setCategories(categories));

      expect(categories).toHaveLength(1);
      expect(state.categories[0].id).toBe(1);
      expect(state.categories[0].name).toBe('한식');
    });
  });

  describe('setRestaurants', () => {
    it('새로운 식당을 저장한다.', () => {
      const restaurants = [{
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구 123456',
        information: '양천주가 in 서울 강남구 123456',
      }];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(restaurants).toHaveLength(1);
      expect(state.restaurants[0].id).toBe(1);
      expect(state.restaurants[0].name).toBe('양천주가');
    });
  });
});
