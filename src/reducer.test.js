import { reducer, initialState } from './reducer';

import {
  setRegion,
  setCategory,
} from './actions';

describe('reducer', () => {
  context('with inital state', () => {
    it("doesn't change anything", () => {
      const state = reducer();

      expect(state.newId).toBe(initialState.newId);
      expect(state.taskTitle).toBe(initialState.region);
      expect(state.tasks).toBe(initialState.category);
    });
  });

  describe('setRegion', () => {
    context('with a new region', () => {
      it('change region name', () => {
        const region = { id: 1, name: '서울' };
        const state = reducer(initialState, setRegion(region));

        expect(state.regionName).toBe(region.name);
      });
    });
  });

  describe('setCategory', () => {
    context('with a new category id', () => {
      it('change category id', () => {
        const category = { id: 1, name: '한식' };
        const state = reducer(initialState, setCategory(category));

        expect(state.categoryId).toBe(category.id);
      });
    });
  });
});
