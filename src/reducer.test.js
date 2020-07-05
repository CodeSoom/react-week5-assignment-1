import reducer from './reducer';

import {
  setRegions,
  selectRegion,
} from './actions';

describe('reducer', () => {
  context('with action matched', () => {
    describe('setRegions', () => {
      it('changes Regions array', () => {
        const initialState = {
          regions: [],
        };
        const regions = [
          { id: 1, name: '서울' },
        ];

        const state = reducer(initialState, setRegions(regions));

        expect(state.regions).not.toHaveLength(0);
      });
    });
    describe('selectRegion', () => {
      it('selects a region', () => {
        const initialState = {
          selectedRegion: null,
          regions: [
            { id: 1, name: '서울' },
          ],
        };
        const state = reducer(initialState, selectRegion(1));

        expect(state.selectedRegion).toEqual({
          id: 1,
          name: '서울',
        });
      });
    });
  });
  context('without action matched', () => {
    describe('default action', () => {
      it('returns state without changes', () => {
        const initialState = {
          regions: [],
        };
        const state = reducer(initialState, () => {});

        expect(state).toEqual(initialState);
      });
    });
  });
});
