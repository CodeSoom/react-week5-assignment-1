import reducer from './reducer';

import {
  loadRegions,
  selectOption,
  setOptions,
} from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

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
});
