import reducer from './reducer';

import { setCategories, setRegions, setRegion, setCategory } from './actions';
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

  describe('setCategory', () => {
    const previousSate = {
      category: '',
    };

    it('선택된 카테고리를 저장한다', () => {
      const { category } = reducer(previousSate, setCategory('양식'));

      expect(category).toBe('양식');
    });
  });

  describe('setRegion', () => {
    const previousSate = {
      region: '',
    };

    it('선택된 지역을 저장한다', () => {
      const { region } = reducer(previousSate, setRegion('서울'));

      expect(region).toBe('서울');
    });
  });
});
