import reducer from './reducer';

import {
  loadRegions,
  loadCategories,
  selectOption,
  setOptions,
  loadRestaurants,
  setRestaurants,
} from './actions';

import { regions, categories, restaurants } from '../fixtures/fixtures';

jest.mock('./services/api');

describe('reducer', () => {
  describe('undefined action ', () => {
    it('doesn\'work', () => {
      const previosState = {
        selectedOption: {
          region: null,
          category: null,
        },
        option: {
          regions: [],
          categories: [],
        },
        restaurants: [],
      };
      const state = reducer(previosState, {
        type: 'aa',
      });

      expect(state).toBe(state);
    });
  });

  describe('selectRegion', () => {
    it('change selected Region', () => {
      const state = reducer({
        selectedOption: {
          region: 2,
        },
      }, selectOption('region', 1));

      expect(state.selectedOption.region).toBe(1);
    });
  });

  describe('setRegions', () => {
    it('set initial value of regions', () => {
      const state = reducer(undefined, setOptions({ optionName: 'regions', values: regions }));
      expect(state.option.regions).toBe(regions);
    });
  });

  describe('loadRegion', () => {
    it('set regions from server', async () => {
      const dispatch = jest.fn();
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalled();
    });
  });

  describe('selectCategory', () => {
    it('change selected Category', () => {
      const state = reducer({
        selectedOption: {
          category: 2,
        },
      }, selectOption('category', 1));

      expect(state.selectedOption.category).toBe(1);
    });
  });

  describe('setCategories', () => {
    it('set initial value of categories', () => {
      const state = reducer(undefined, setOptions({ optionName: 'categories', values: categories }));
      expect(state.option.categories).toBe(categories);
    });
  });

  describe('loadCategories', () => {
    it('set categories from server', async () => {
      const dispatch = jest.fn();
      await loadCategories()(dispatch);

      expect(dispatch).toBeCalled();
    });
  });

  describe('loadRestaurants', () => {
    it('set restaurants from server', async () => {
      const dispatch = jest.fn();
      await loadRestaurants({ region: '서울', categoryId: 1 })(dispatch);

      expect(dispatch).toBeCalled();
    });
  });

  describe('setRestaurants', () => {
    it('set restaurants', () => {
      const state = reducer(undefined, setRestaurants(restaurants));
      expect(state.restaurants).toBe(restaurants);
    });
  });
});
