import reducer from './reducer';

import {
  setPlaces,
} from './actions';

import places from '../../fixtures/places';

describe('reducer', () => {
  describe('setPlaces', () => {
    it('changes places array', () => {
      const initialState = {
        places: [],
      };

      const state = reducer(initialState, setPlaces(places));

      expect(state.places).not.toHaveLength(0);
    });
  });
});
