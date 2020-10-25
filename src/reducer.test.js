import reducer from './reducer';

import {
  setCategories,
  setRegions,
  selectRegion,
} from './actions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changes Regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('selectRegion', () => {
    it('select Region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('undefined action', () => {
    it("doesn't work", () => {
      const state = reducer(initialState, {});

      expect(state.categories).toHaveLength(0);
    });
  });

  describe('in initial state', () => {
    it('renders initial state', () => {
      const state = reducer();

      expect(state.categories).toHaveLength(0);
    });
  });
});
