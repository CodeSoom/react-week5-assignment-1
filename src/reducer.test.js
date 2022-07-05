import { getRegions } from './actions';

import { regions } from './fixtures/restaurant';

import reducer from './reducer';

describe('reducer', () => {
  context('state가 없는경우', () => {
    it('아무값도 바뀌지않는다.', () => {
      const state = reducer(undefined, { });

      expect(state).toEqual({
        regions: [],
      });
    });
  });

  context('state가 있는경우', () => {
    describe('getRegions', () => {
      it('regions를 얻는다', () => {
        const state = reducer({ regions: [] }, getRegions(regions));

        expect(state.regions).toBe(regions);
      });
    });
  });
});
