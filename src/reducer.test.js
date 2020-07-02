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
    context('with a new region name', () => {
      it('change region name', () => {
        const regionName = '서울';
        const state = reducer(initialState, setRegion(regionName));

        expect(state.regionName).toBe(regionName);
      });
    });
  });

  describe('setCategory', () => {
    context('with a new category id', () => {
      it('change category id', () => {
        const categoryId = 1;
        const state = reducer(initialState, setCategory(categoryId));

        expect(state.categoryId).toBe(categoryId);
      });
    });
  });
});
