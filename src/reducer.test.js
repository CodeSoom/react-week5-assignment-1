import reducer from './reducer';

import { checkRegion } from './actions';

describe('reducer', () => {
  it('checkRegion', () => {
    const state = reducer({
      regions: [
        { id: 1, name: '서울' },
      ],
    }, checkRegion(1));

    expect(state.regions[0].name).toBe('서울(V)');
  });
});