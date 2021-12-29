import reducer from './reducer';

import { setCategories, setRegions, setRegion, setCategory } from './actions';
import { CATEGORIES, REGIONS } from '../lib/fixtures';

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

  describe('setCategory', () => {
    const previousSate = {
      category: {
        id: 0,
        name: '',
      },
    };

    it('선택된 카테고리를 저장한다', () => {
      const { category } = reducer(previousSate, setCategory(CATEGORIES[0]));

      expect(category).toEqual(CATEGORIES[0]);
    });
  });

  describe('setRegion', () => {
    const previousSate = {
      region: {
        id: 0,
        name: '',
      },
    };

    it('선택된 지역을 저장한다', () => {
      const { region } = reducer(previousSate, setRegion(REGIONS[0]));

      expect(region).toEqual(REGIONS[0]);
    });
  });
});
