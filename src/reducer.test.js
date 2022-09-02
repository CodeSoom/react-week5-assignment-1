import reducer from './reducer';

import {
  selectRegion,
} from './actions';

import { regions, categories } from '../__fixtures__/data';

describe('reducer', () => {
  describe('selectRegion', () => {
    it('updates selectedRegion ', () => {
      const initialState = {
        selectedRegion: {
          id: '',
          name: '',
        },
      };

      const state = reducer(initialState, selectRegion(regions[0]));

      expect(state.selectedRegion.id).toBe(1);
      expect(state.selectedRegion.name).toBe('서울');
    });
  });

  describe('selectCategory', () => {
    it('updates selectedCategory', () => {
      const initialState = {
        selectedCategory: {
          id: '',
          name: '',
        },
      };

      const state = reducer(initialState, selectCategory(categories[0]));

      expect(state.selectedCategory.id).toBe(1);
      expect(state.selectedCategory.name).toBe('한식');
    });
  });
});
