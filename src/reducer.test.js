import reducer from './reducer';

import { initialState } from '../fixtures/restaurants';

describe('reducer', () => {
  it('처음에는 초기 상태를 반환한다.', () => {
    const state = reducer(undefined);
    expect(state).toEqual(initialState);
  });
});
