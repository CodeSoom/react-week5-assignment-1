import reducer from './reducer';

import {
  setRegions,
} from './actions';

import regions from '../../fixture/regions';

describe('reducer', () => {
  test('setRegions', () => {
    const initialState = {
      regions: [],
    };

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(2);
  });
});
