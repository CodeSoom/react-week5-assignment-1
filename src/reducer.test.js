import reducer from './reducer';

import {
  loadRegions,
  selectOption,
  setRegions,
  setCategories,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

jest.mock('./services/api');

describe('reducer', () => {
  describe('undefined action ', () => {
    it('doesn\'work', () => {
      const previosState = {
        selectedRegion: -1,
        selectedCategory: -1,
        regions: [],
        categories: [],
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
      const state = reducer(undefined, setRegions(regions));
      expect(state.regions).toBe(regions);
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
      const state = reducer(undefined, setCategories(categories));
      expect(state.categories).toBe(categories);
    });
  });
});
