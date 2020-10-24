import reducer from './reducer';
import { updateRegions } from './actions';

describe('reducer', () => {
  it('updateRegions', () => {
    const state = reducer({
      selected: {
        region: '',
      },
    }, updateRegions('서울'));

    expect(state.selected.region).toBe('서울');
  });
});
