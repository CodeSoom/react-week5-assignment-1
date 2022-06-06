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
      category: '',
    };

    it('선택된 카테고리를 저장한다', () => {
      const { category } = reducer(previousState, setCategory('양식'));

      expect(category).toBe('양식');
    });
  });

  describe('setRegion', () => {
    const previousState = {
      regions: '',
    };

    it('선택된 지역을 저장한다', () => {
      const { region } = reducer(previousState, setRegion('서울'));

      expect(region).toBe('서울');
    });
  });
});
