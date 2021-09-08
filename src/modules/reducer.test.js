import reducer from './reducer';

import places from '../../fixtures/places';
import restaurants from '../../fixtures/restaurants';

import {
  setPlaces,
  setRestaurants,
} from './actions';

describe('reducer', () => {
  describe('setPlaces', () => {
    it('changes places array', () => {
      const initialState = {
        places: [],
      };

      const state = reducer(initialState, setPlaces(places));

      expect(state.places).not.toHaveLength(0);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(3);
    });
  });
});
