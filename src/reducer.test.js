import reducer from './reducer';

import {
  selecteRegion,
} from './actions';

import { regions, categories } from '../__fixtures__/data';

describe('reducer', () => {
  describe('selecteRegion', () => {
    it('updates region selected', () => {
      const initialState = {
        selected: {
          region: {
            id: '',
            name: '',
          },
        },
      };

      const state = reducer(initialState, selecteRegion(regions[0]));

      expect(state.selected.region.name).toBe('서울');
    });
  });
});
