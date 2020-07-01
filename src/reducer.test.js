import { regions } from '../__fixture__/data';

import reducer from './reducer';

import { setInitRegions } from './action';

describe('reducer', () => {
  context('setInitRegions', () => {
    it('set regions', () => {
      const prevState = {
        regions: [],
      };

      const newState = reducer(prevState, setInitRegions(regions));

      expect(newState.regions).not.toHaveLength(0);
    });
  });

  context('selectRegion', () => {
    it('shows a mark for a selected region', () => {
      const prevState = {
        selectRegion: '',
      };

      const newState = reducer(prevState, selectRegion('서울'));

      expect(newState.selectRegion).toBe('서울');
    });
  });
});
