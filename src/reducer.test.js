import reducer from './reducer';

import {
  setCategories, setRegions,
} from './actions';

import categories from '../fixtures/categories';

describe('reducer', () => {
  const initialState = {
    categories: [],
  };

  describe('setRegions', () => {
    it('changes Regions', () => {
      const regions = [
        { id: 1, name: '서울' },
      ];
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });
  context('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  context('undefined action', () => {
    it("doesn't work", () => {
      const state = reducer(initialState, {});

      expect(state.categories).toHaveLength(0);
    });
  });

  context('in initial state', () => {
    it('renders initial state', () => {
      const state = reducer();

      expect(state.categories).toHaveLength(0);
    });
  });
});
