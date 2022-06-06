import reducer from './reducer';

import {
  setCategories, setRegions, setCategory, setRegion,
} from './action';
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

      expect(regions.length).toBe(11);
    });
  });

  describe('setCategory', () => {
    const previousState = {
      category: {
        id: 0,
        name: '',
      },
    };

    it('선택된 카테고리를 저장한다', () => {
      const { categoryId } = reducer(previousState, setCategory(CATEGORIES[0]));

      expect(categoryId).toEqual(CATEGORIES[0]);
    });
  });

  describe('setRegion', () => {
    const previousState = {
      region: {
        id: 0,
        name: '',
      },
    };

    it('선택된 지역을 저장한다', () => {
      const { region } = reducer(previousState, setRegion(REGIONS[0]));

      expect(region).toEqual(REGIONS[0]);
    });
  });
});
