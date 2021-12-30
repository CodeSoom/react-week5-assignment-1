import { useSelector, useDispatch } from 'react-redux';

import reducer from './reducer';

import restaurants from '../fixtures/fixture';

import {
  setRestaurants,
  addRestaurant,
  putRestaurantField,

} from './action';

describe('reducer', () => {
  const dispatch = useDispatch();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
  }));

  context('with setRestaurants', () => { // 테스트이름을 액션명으로 해도 되는지?
    it('updates state with restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  context('without setRestaurants', () => {
    it('changes nothing', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, initialState);

      expect(state.restaurants).toHaveLength(0);
    });
  });

  context('with addRestaurant', () => {
    it('appends restaurant into restaurants and clears', () => {
      const initialState = {
        newId: 101,
        restaurants: [],
        restaurant: {
          name: '이름',
          category: '분류',
          place: '주소',
        },
      };

      const state = reducer(initialState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurant.name).toBe('');
      expect(state.restaurants[0].id).toBe(101);
    });
  });
});
