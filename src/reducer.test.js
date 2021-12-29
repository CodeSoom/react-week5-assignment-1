import { useSelector, useDispatch } from 'react-redux';

import reducer from './reducer';

import restaurants from '../fixtures/fixture';

import {
  setRestaurants,
  addRestaurant,
} from './action';

describe('reducer', () => {
  const dispatch = useDispatch();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
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
});
