import reducer from './reducer';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  it('returns state', () => {
    const state = reducer({ restaurants });

    state.restaurants.forEach(({ name }) => {
      expect(name).not.toBeNull();
    });
  });
});
