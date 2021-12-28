import reducer from './reducer';

import { setCategories, setRegions } from './actions';
import { CATEGORIES, REGIONS } from './fixtures';

describe('reducer', () => {
  describe('setCategories', () => {
    const previousState = {
      categories: [],
    };

    it('카테고리를 저장한다', () => {
      const { categories } = reducer(previousState, setCategories(CATEGORIES));

      expect(categories.length).toBe(4);
    });
  });

  describe('setRegions', () => {
    const previousSate = {
      regions: [],
    };

    it('지역을 저장한다', () => {
      const { regions } = reducer(previousSate, setRegions(REGIONS));

      expect(regions.length).toBe(2);
    });
  });
});
