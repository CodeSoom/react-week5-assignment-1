import reducer from './reducer';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

import {
  selectRegion,
  setRegions,
  selectCategory,
  setCategories,
} from './actions';

describe('reducer', () => {
  const initialState = {
    selectedRegionId: 0,
    regions: [],
    selectedCategoryId: 0,
    categories: [],
  };

  it('return state', () => {
    const state = reducer();
    expect(state).toStrictEqual(initialState);
  });

  it('return unchanges state', () => {
    const state = reducer(initialState, {
      type: 'unknownAction',
      payload: {
        name: 'unknown',
      },
    });
    expect(state).toBe(initialState);
  });

  describe('RegionsContaioner', () => {
    it('selects a region', () => {
      const selectedCategoryId = 1;
      const state = reducer(regions, selectRegion(selectedCategoryId));

      expect(state.selectedRegionId).toBe(selectedCategoryId);
    });

    it('changes regions', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('CategoriesContaioner', () => {
    it('selects a category', () => {
      const selectedCategoryId = 1;
      const state = reducer(categories, selectCategory(selectedCategoryId));

      expect(state.selectedCategoryId).toBe(selectedCategoryId);
    });

    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
    });
  });
});
