import reducer from './reducer';
import { setRegions } from './actions';

import regionsFixture from './__fixtures__/regions';

describe('reducer', () => {
  const previousState = {
    regions: [],
    categories: [],
  };

  it('setRegions', () => {
    // given
    const regions = regionsFixture;
    const action = setRegions(regions);
    // when
    const state = reducer(previousState, action);
    // then
    expect(state.regions).toBe(regions);
  });
});
