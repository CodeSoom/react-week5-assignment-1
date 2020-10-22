import { setCategories, setRegions } from './actions';

import reducer from './reducer';

describe('reducer', () => {
  describe('checkedCategories', () => {

  });
  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  context('Unhandled action type', () => {
    it('returns initial state', () => {
      const state = reducer(undefined, { type: 'Unhandled action' });

      expect(state).toBe(state);
    });
  });
});
