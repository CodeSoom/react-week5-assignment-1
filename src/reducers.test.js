import reducer from './reducer';
import {
  setRegions, setCategories, selectedRegion,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('change regions', () => {
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
    it('change categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));
      expect(state.categories).toHaveLength(1);
    });
  });

  describe('selectRegion', () => {
    it('change categories', () => {
      const initialState = {
        regions: [{ id: 1, name: '한식' }],
        selectedRegions: null,
      };

      const state = reducer(initialState, selectedRegion(1));
      // expect(state.categories).toHaveLength(1);
    });
  });
});
