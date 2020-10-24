import reducer from './reducer';

import regions from '../__fixtures__/regions';

import { selectRegion, setRegions } from './actions';

describe('reducer', () => {
  describe('with initial state', () => {
    const initialState = {
      selectedRegionId: 0,
      regions: [],
    };

    it('return state', () => {
      const state = reducer();
      expect(state).toStrictEqual(initialState);
    });

    it('return unchanges state', () => {
      const state = reducer(initialState, {
        type: 'unknownAction',
        payload: {
          name: 'unknown',
        },
      });
      expect(state).toBe(initialState);
    });
  });

  describe('setRegions', () => {
    it('selectRegion', () => {
      const clickedRegionId = 1;
      const state = reducer(regions, selectRegion(clickedRegionId));

      expect(state.selectedRegionId).toBe(clickedRegionId);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });
});
