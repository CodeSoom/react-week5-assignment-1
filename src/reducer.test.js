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

describe('Reducer', () => {
  const initialState = {
    region: {},
    category: {},
    regions: [],
    categories: [],
    restaurants: [],
  };

  context('with setRestaurants', () => {
    it('returns updated restaurants', () => {
      expect(reducer(initialState, setRestaurants(restaurants))).toEqual({
        ...initialState,
        restaurants,
      });
    });
  });

  context('with setRegions', () => {
    it('returns updated regions', () => {
      expect(reducer(initialState, setRegions(regions))).toEqual({
        ...initialState,
        regions,
      });
    });
  });

  context('with setCategories', () => {
    it('returns updated categories', () => {
      expect(reducer(initialState, setCategories(categories))).toEqual({
        ...initialState,
        categories,
      });
    });
  });

  context('with selectRegion', () => {
    it('updates region', () => {
      expect(reducer(initialState, selectRegion('대전'))).toEqual({
        ...initialState,
        region: regions.filter((region) => region.name === '대전')[0],
      });
    });
  });

  context('with selectCategory', () => {
    it('updates category', () => {
      expect(reducer(initialState, selectCategory('중식'))).toEqual({
        ...initialState,
        category: categories.filter((category) => category.name === '중식')[0],
      });
    });
  });
});
