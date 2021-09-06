import reducer from './reducer';

import places from '../../__fixtures__/places';

// import {
//   setPlaces,
// } from './actions';

describe('reducer', () => {
  describe('setPlaces', () => {
    it('clicks places', () => {
      const state = reducer({
        places: [],
      }, {
        type: 'setPlaces',
        payload: { places },
      });
      expect(state.places).toBe(places);
    });
  });
});
