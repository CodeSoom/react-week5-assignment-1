import reducer from './reducer';

import { setCategories, setRegions } from './actions';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

describe('reducer', () => {
  describe('setRegions', () => {
    it('지역 데이터를 저장한다.', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(3);
    });
  });

  describe('setCategories', () => {
    it('카테고리 데이터를 저장한다.', () => {
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(3);
    });
  });

  describe('selectedRegion', () => {
    it('선택된 지역의 이름을 저장한다.', () => {

    });
  });
});
