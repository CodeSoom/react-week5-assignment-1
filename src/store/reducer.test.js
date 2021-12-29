import {
  changeCategory, changeRegion, setCategories, setRegions,
} from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('changeRegion', () => {
    it('새로운 regionName 으로 변경후, 새로운 state 를 반환한다. ', () => {
      const prevState = {
        selected: {
          regionName: null,
        },
      };

      const action = changeRegion(1);

      const state = reducer(prevState, action);

      expect(state).toEqual({
        selected: {
          regionName: 1,
        },
      });
    });
  });

  describe('changeCategory', () => {
    it('새로운 categoryId 로 변경후, 새로운 state 를 반환한다. ', () => {
      const prevState = {
        selected: {
          categoryId: null,
        },
      };

      const action = changeCategory(1);

      const state = reducer(prevState, action);

      expect(state).toEqual({
        selected: {
          categoryId: 1,
        },
      });
    });
  });

  describe('setCategories', () => {
    it('새로운 카테고리 리스트로 변경 후, 새로운 state 를 반환하다.', () => {
      const prevState = {
        categories: [],
      };

      const action = setCategories([{ name: '한식', id: 1 }]);

      const state = reducer(prevState, action);

      expect(state).toEqual({
        categories: [
          { name: '한식', id: 1 },
        ],
      });
    });
  });

  describe('setRegions', () => {
    it('새로운 지역 리스트로 변경 후, 새로운 state 를 반환한다.', () => {
      const prevState = {
        regions: [],
      };

      const action = setRegions([{ name: '서울', id: 1 }]);

      const state = reducer(prevState, action);

      expect(state).toEqual({
        regions: [
          { name: '서울', id: 1 },
        ],
      });
    });
  });
});
