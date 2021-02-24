import reducer from './reducer';

import { regions, restaurants } from '../fixtures';

import setRegions from './actions';

describe('reducer', () => {
  it('returns default parameter, initial state', () => {
    const state = reducer();

    expect(state.regions).toHaveLength(0);
    expect(state.categories).toHaveLength(0);
    expect(state.restaurants).toHaveLength(0);
  });

  it('returns state', () => {
    const state = reducer({ restaurants });

    expect(state.restaurants[0].name).toBe('양천주가');
    expect(state.restaurants[1].name).toBe('한국식 초밥');
    expect(state.restaurants[2].name).toBe('김초밥');
  });

  it('changes regions', () => {
    const state = reducer({ regions }, setRegions(regions));

    expect(state.regions[0].name).toBe('서울');
    expect(state.regions[1].name).toBe('대전');
    expect(state.regions[2].name).toBe('대구');
  });
});
