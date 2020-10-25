import reducer from './reducer';

import regions from '../../__fixtures__/regions';

import categories from '../../__fixtures__/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('update regions', () => {
      const state = reducer({
        regions: [],
      }, {
        type: 'setRegions',
        payload: { regions },
      });

      expect(state.regions).toBe(regions);
    });
  });

  describe('selectRegion', () => {
    const region = '서울';
    it('select Region', () => {
      const state = reducer({
        region: '',
      }, {
        type: 'selectRegion',
        payload: { region },
      });

      expect(state.selected.region).toBe(region);
    });
  });

  describe('setCategories', () => {
    it('update categories', () => {
      const state = reducer({
        categories: [],
      }, {
        type: 'setCategories',
        payload: { categories },
      });

      expect(state.categories).toBe(categories);
    });
  });

  describe('selectCategory', () => {
    const category = '한식';
    it('select Category', () => {
      const state = reducer({
        region: '',
      }, {
        type: 'selectCategory',
        payload: { category },
      });

      expect(state.selected.category).toBe(category);
    });
  });

  describe('exception', () => {
    const state = reducer(
      undefined, { type: '', payload: {} },
    );

    it('return state', () => {
      expect(state).toBe(state);
    });
  });
});
