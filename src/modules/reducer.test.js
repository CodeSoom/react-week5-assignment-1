import reducer from './reducer';

import regions from '../../__fixtures__/regions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('', () => {
      const state = reducer({
        regions: [],
      }, {
        type: 'setRegions',
        payload: { regions },
      });

      expect(state.regions).toBe(regions);
    });
  });

  describe('selectRegion', () => {
    const region = '서울';
    it('select Region', () => {
      const state = reducer({
        region: '',
      }, {
        type: 'selectRegion',
        payload: { region },
      });

      expect(state.selected.region).toBe(region);
    });
  });

  describe('exception', () => {
    const state = reducer(
      undefined, { type: '', payload: {} },
    );

    it('return state', () => {
      expect(state).toBe(state);
    });
  });
});
