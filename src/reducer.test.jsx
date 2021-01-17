import reducer from './reducer';

import {
  setRegions, setCategories, setRestaurants, updateFilter,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  context('without state nor action', () => {
    const initialState = {
      filter: {
        regionName: null,
        categoryId: null,
      },
      regions: [],
      categories: [],
      restaurants: [],
    };
    it('returns state', () => {
      expect(reducer()).toEqual(initialState);
    });
  });

  context('with action', () => {
    describe('updateFilter', () => {
      it('updates filter', () => {
        const previousState = {
          filter: {
            regionName: '서울',
            categoryId: 1,
          },
        };

        const state = reducer(
          previousState,
          updateFilter({ filter: { region: '서울' } }),
        );

        expect(state.filter.region).toBe('서울');
      });
    });

    describe('setRegions', () => {
      it('sets regions', () => {
        const previousState = {
          regions: [],
        };

        const state = reducer(
          previousState,
          setRegions({
            regions,
          }),
        );

        expect(state.regions).toEqual(regions);
      });
    });

    describe('setCategories', () => {
      it('sets categories', () => {
        const previousState = {
          categories: [],
        };

        const state = reducer(
          previousState,
          setCategories({
            categories,
          }),
        );

        expect(state.categories).toEqual(categories);
      });
    });

    describe('setRestaurants', () => {
      it('sets restaurants', () => {
        const previousState = {
          restaurants: [],
        };

        const state = reducer(
          previousState,
          setRestaurants({
            restaurants,
          }),
        );

        expect(state.restaurants).toEqual(restaurants);
      });
    });
  });
});
