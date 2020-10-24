import reducer from './reducer';
import {
  updateRegion,
  updateCategory,
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

  it('updateCategory', () => {
    const state = reducer({
      selected: {
        category: '',
      },
    }, updateCategory('한식'));

    expect(state.selected.category).toBe('한식');
  });
});
