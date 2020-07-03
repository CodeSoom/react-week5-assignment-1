import reducer from './reducer';

import { regions, initialState } from '../fixtures/restaurants';

describe('reducer', () => {
  it('처음에는 초기 상태를 반환한다.', () => {
    const state = reducer(undefined);
    expect(state).toEqual(initialState);
  });

  it('지역 정보를 추가한다.', () => {
    const state = reducer(initialState, {
      type: 'setRegions',
      payload: {
        regions,
      },
    });
    expect(state.regions).toEqual(regions);
  });
});
