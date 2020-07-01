import { reducer, initialState } from './reducer';

import {
  chooseRegion,
  chooseCategory,
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

  describe('chooseRegion', () => {
    context('when click region button', () => {
      it('change region name', () => {
        const regionName = '서울';
        const state = reducer(initialState, chooseRegion(regionName));

        expect(state.regionName).toBe(regionName);
      });
    });
  });

  describe('chooseCategory', () => {
    context('when click category button', () => {
      it('change category id', () => {
        const categoryId = 1;
        const state = reducer(initialState, chooseCategory(categoryId));

        expect(state.categoryId).toBe(categoryId);
      });
    });
  });
});
