import reducer from './reducer';

import {
  selectRegion,
} from './actions';

import { regions, categories } from '../__fixtures__/data';

describe('reducer', () => {
  describe('selecteRegion', () => {
    it('updates region selected', () => {
      const initialState = {
        selectedRegion: {
          id: '',
          name: '서울',
        },
      };

      const state = reducer(initialState, selectRegion(regions[0]));

      expect(state.selectedRegion.name).toBe('서울');
    });
  });
});
