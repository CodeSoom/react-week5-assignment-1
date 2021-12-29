import reducer from './restaurants';
import { setRestaurants } from '../actions';

describe('restaurants', () => {
  const initialState = {
    restaurants: [],
  };

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
