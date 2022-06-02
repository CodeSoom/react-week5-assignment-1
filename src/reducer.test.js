import reducer from './reducer';

import { setCategories, setRegions } from './action';
import { CATEGORIES, REGIONS } from './fixture';

describe('reducer', () => {
  describe('setCategories', () => {
    const previousState = {
      categories: [],
    };

    it('카테고리를 저장한다', () => {
      const { categories } = reducer(previousState, setCategories(CATEGORIES));

      expect(categories.length).toBe(11);
    });
  });

  describe('setRegions', () => {
    const previousState = {
      regions: [],
    };

    it('지역을 저장한다', () => {
      const { regions } = reducer(previousState, setRegions(REGIONS));

      expect(regions.length).toBe(0);
    });
  });
});
