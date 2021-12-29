import reducer from './reducer';

import restaurants from '../fixtures/fixture';

import { setRestaurants } from './action';

describe('reducer test', () => {
  it('updates state', () => {
    const initialState = [];

    const state = reducer(initialState, setRestaurants(restaurants));

    expect(state.initialState).toHaveLength(1);
  });
});
