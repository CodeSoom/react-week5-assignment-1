import reducer from './reducer';

import {
  setRegions,
  selectRegion,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('should set regions array', () => {
      const regions = [
        { id: 101, name: '서울' },
      ];
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });
  describe('selectRegion', () => {
    it('should mark selected region', () => {
      const initialState = {
        selectedRegion: '',
      };

      const state = reducer(initialState, selectRegion('서울'));

      expect(state.selectedRegion).toBe('서울');
    });
  });
});
