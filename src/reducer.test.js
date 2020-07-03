import reducer from './reducer';

describe('reducer', () => {
  it('처음에는 초기 상태를 반환한다.', () => {
    const initialState = {
      regions: [],
    };

    const state = reducer(undefined);
    expect(state).toEqual(initialState);
  });
});
