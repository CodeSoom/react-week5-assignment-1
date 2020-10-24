import reducer from './reducer';
import {
  updateRegion,
  loadRegions,
} from './actions';

describe('reducer', () => {
  it('updateRegions', () => {
    const state = reducer({
      selected: {
        region: '',
      },
    }, updateRegion('서울'));

    expect(state.selected.region).toBe('서울');
  });
});
