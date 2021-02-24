import reducer from './reducer';

import {
  chooseRegions
} from './actions';

import regions from '../fixtures/regions'

describe('reducer', () => {
  describe('chooseRegions', () => {
    it('chooses region buttons', () => {
      const initialState = {
        regions: [],
      }
      const state = reducer(initialState, chooseRegions(regions))

      expect(state.regions).not.toHaveLength(0);
    })
  })
})