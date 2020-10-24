import reducer from './reducer';
import {
  updateRegion,
  setRegions,
} from './actions';
import regions from '../../fixtures/regions';

describe('reducer', () => {
  it('updateRegions', () => {
    const state = reducer({
      selected: {
        region: '',
      },
    }, updateRegion('서울'));

    expect(state.selected.region).toBe('서울');
  });

  it('setRegions', async () => {
    const state = reducer({
      regions: [],
    }, setRegions(regions));

    expect(state.regions).toHaveLength(2);
  });
});
