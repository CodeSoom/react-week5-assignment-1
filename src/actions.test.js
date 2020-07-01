import setRegions from './actions';
import regionsFixture from './__fixtures__/regions';

describe('Action creators', () => {
  it('setRegions', () => {
    // given
    const regions = regionsFixture;
    // when
    const action = setRegions(regions);
    // then
    expect(action.type).toBe('setRegions');
    expect(action.payload.regions).toBe(regions);
  });
});
