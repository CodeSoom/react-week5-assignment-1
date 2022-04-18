import reducer from './reducer';

import {
  setLocations,
} from './actions';

import locations from '../fixtures/locations';

describe('reducer', () => {
  describe('setLocations', () => {
    it('changes the locations array', () => {
      const initialState = {
        locations: [],
      };

      const state = reducer(initialState, setLocations(locations));

      expect(state.locations).toHaveLength(1);
    });
  });
});
