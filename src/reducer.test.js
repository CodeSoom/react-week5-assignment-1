import reducer from './reducer';
import { setStores, setRegions } from './actions';
import regions from './fixtures/regions';
import stores from './fixtures/stores';

describe('reducer', () => {
  describe('setRegions', () => {
    it('changedSince Regions array', () => {
      const initialState = { regions: [] };
      const state = reducer(initialState, setRegions(regions));
      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('setStores', () => {
    it('changedSince Stores', () => {
      const initialState = {
        stores: [],
      };
      const state = reducer(initialState, setStores(stores));
      expect(state.stores).toHaveLength(1);
    });
  });
});
