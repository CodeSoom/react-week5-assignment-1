import reducer from './reducer';

import { setSelectedRegion } from './actions';

describe('reducer', () => {
  describe('setSelectedRegion', () => {
    it('changes a selectedRegion', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, setSelectedRegion('부산'));

      expect(state.selectedRegion).toBe('부산');
    });
  });
});
