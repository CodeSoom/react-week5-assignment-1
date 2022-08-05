import reducer from './reducer';

import {
  setRestaurants,
  setRegions,
  selectRegion,
  setCategories,
  selectCategory,
} from './actions';

import {
  regions,
  categories,
  restaurants,
} from '../fixtures/staticData';

const initialState = {
  region: {},
  category: {},
  regions: [],
  categories: [],
  restaurants: [],
};

describe('Reducer', () => {
  context('with setRestaurants', () => {
    it('returns updated restaurants', () => {
      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toEqual(restaurants);
    });
  });

  context('with setRegions', () => {
    it('returns updated regions', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toEqual(regions);
    });
  });

  context('with setCategories', () => {
    it('returns updated categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toEqual(categories);
    });
  });

  context('with selectRegion', () => {
    it('updates region', () => {
      const startState = {
        ...initialState,
        regions,
      };
      const state = reducer(startState, selectRegion('대전'));

      expect(state.region).toEqual({
        id: 2,
        name: '대전',
      });
    });
  });

  context('with selectCategory', () => {
    it('updates category', () => {
      const startState = {
        ...initialState,
        categories,
      };
      const state = reducer(startState, selectCategory('중식'));

      expect(state.category).toEqual({
        id: 2,
        name: '중식',
      });
    });
  });

  context('without predefined action', () => {
    it('returns state as is', () => {
      function someAction() {
        return {
          type: 'someAction',
        };
      }

      expect(reducer(initialState, someAction())).toEqual(initialState);
    });
  });

  context('without any actions', () => {
    it('returns state as is', () => {
      expect(reducer()).toEqual(initialState);
    });
  });
});
