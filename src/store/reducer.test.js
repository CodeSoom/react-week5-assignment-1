import { setCategories, setRegions } from './actions';

import reducer, { initailState } from './reducer';

describe('setCategories', () => {
  context('state가 없을 때', () => {
    it('initialState를 반환합니다.', () => {
      const state = reducer(
        undefined,
        {},
      );
      expect(state).toEqual(initailState);
    });
  });
  describe('setCategories', () => {
    it('카테고리리스트가 변경됩니다.', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];

      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRegions', () => {
    it('지역리스트가 변경됩니다.', () => {
      const regions = [
        { id: 101, name: '부산' },
      ];

      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });
});
