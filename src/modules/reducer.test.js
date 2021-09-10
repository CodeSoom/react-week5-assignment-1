import reducer from './reducer';

import places from '../../fixtures/places';
import restaurants from '../../fixtures/restaurants';
import categories from '../../fixtures/categories';

import {
  setCategories,
  setPlaces,
  setRestaurants,
  clickPlace,
  clickCategory,
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

  describe('setCategories', () => {
    it('changes categories array', () => {
      const initialState = {
        categories: [],
      };
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
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

  describe('clickPlace', () => {
    it('shows button click action', () => {
      const clickedPlace = '';
      const { name } = places[0];

      const state = reducer({
        places,
        clickedPlace,
      }, clickPlace(name));

      expect(state.clickedPlace).toBe(places[0].name);
    });
  });

  describe('clickCategories', () => {
    it('shows category button action', () => {
      const clickedCategory = '';

      const state = reducer({
        categories,
        clickedCategory,
      }, clickCategory(categories[0].id));

      expect(state.clickedCategory).toBe(categories[0].id);
    });
  });
});
