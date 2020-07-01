import { reducer, initialState } from './reducer';

import {
  chooseRegion,
  chooseCategory,
} from './actions';

describe('reducer', () => {
  context('with default state', () => {
    it("doesn't change anything", () => {
      const state = reducer();

      expect(state.newId).toBe(initalState.newId);
      expect(state.taskTitle).toBe(initalState.region);
      expect(state.tasks).toBe(initalState.category);
    });
  });
});
