import reducer from './reducer';

import {
  chooseRegions
} from './actions';

describe('reducer', () => {
  describe('chooseRegions', () => {
    it('chooses region buttons', () => {
      const initialState = {
        regions: [],
      }
      const state = reducer(initialState, chooseRegions(regions))

      expect(state).not.toHaveLength(0);
    })
    
  })
})