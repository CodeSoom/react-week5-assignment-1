import reducer from './reducer';

import {
  setRegions,
} from './actions';

const initialState = {
  regions: [],
};

describe('reducer', () => {
  context('with action matched', () => {
    describe('setRegions', () => {
      it('changes Regions array', () => {
        const regions = [
          { id: 1, name: '서울' },
        ];

        const state = reducer(initialState, setRegions(regions));

        expect(state.regions).not.toHaveLength(0);
      });
    });
  });
  context('without action matched', () => {
    describe('default action', () => {
      it('returns state without changes', () => {
        const state = reducer(initialState, () => {});

        expect(state).toEqual(initialState);
      });
    });
  });
});
