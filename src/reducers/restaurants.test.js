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

  describe('예외상황처리', () => {
    it('액션 타입이 존재하지 않으면, 기본 state를 반환한다.', () => {
      const state = reducer(initialState, {});

      expect(state).toEqual(initialState);
    });

    it('초기 state가 undefined이면, 기본 state를 반환한다.', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initialState);
    });
  });
});
