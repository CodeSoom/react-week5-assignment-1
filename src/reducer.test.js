import reducer from './reducer';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  context('without state', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      selectedRegion: null,
      selectedCategory: null,
    };

    it('has the initial state', () => {
      const state = reducer(
        undefined,
        { type: undefined },
      );

      expect(state).toEqual(initialState);
    });
  });

  context('with unhandled actions', () => {
    it('does nothing', () => {
      const state = reducer(
        {
          restaurants: [],
        },
        { type: undefined },
      );

      expect(state).toEqual({ restaurants: [] });
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer(
        {
          regions: [],
        },
        {
          type: 'setRegions',
          payload: {
            regions,
          },
        },
      );

      expect(state.regions).toEqual(regions);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(
        {
          categories: [],
        },
        {
          type: 'setCategories',
          payload: {
            categories,
          },
        },
      );

      expect(state.categories).toEqual(categories);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const state = reducer(
        {
          restaurants: [],
        },
        {
          type: 'setRestaurants',
          payload: {
            restaurants,
          },
        },
      );

      expect(state.restaurants).toEqual(restaurants);
    });
  });

  describe('selectRegion', () => {
    it('changes selectedRegion', () => {
      const state = reducer(
        {
          selectedRegion: null,
        },
        {
          type: 'selectRegion',
          payload: {
            region: regions[1],
          },
        },
      );

      expect(state.selectedRegion).toEqual(regions[1]);
    });
  });

  describe('selectCategory', () => {
    it('changes selectedCategory', () => {
      const state = reducer(
        {
          selectedCategory: null,
        },
        {
          type: 'selectCategory',
          payload: {
            category: categories[3],
          },
        },
      );

      expect(state.selectedCategory).toEqual(categories[3]);
    });
  });
});
