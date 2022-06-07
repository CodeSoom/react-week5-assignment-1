import reducer, {
  setAreaName, setAreas, setCategories, setCategoryId,
} from './reducer';

import areas from '../../fixtures/areas';
import categories from '../../fixtures/categories';

describe('reducer', () => {
  describe('setAreas', () => {
    it('changes areas array', () => {
      const initialState = { areas: [] };
      const state = reducer(initialState, setAreas(areas));

      expect(state.areas).toHaveLength(2);
    });
  });

  describe('setCategories', () => {
    it('changes categories array', () => {
      const initialState = { categories: [] };
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(2);
    });
  });

  describe('setAreaName', () => {
    it('changes areaName', () => {
      const initialState = { areaName: undefined };
      const state = reducer(initialState, setAreaName('서울'));

      expect(state.areaName).toEqual('서울');
    });
  });

  describe('setCategoryId', () => {
    it('changes categoryId', () => {
      const initialState = { categoryId: undefined };
      const state = reducer(initialState, setCategoryId(1));

      expect(state.categoryId).toEqual(1);
    });
  });
});
