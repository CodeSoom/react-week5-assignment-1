import reducer from './reducer';

describe('reducer', () => {
  it('액션이 없으면 initialState를 반환한다.', () => {
    const expectState = {
      regions: [],
    };
    const state = reducer(
      {
        regions: [],
      },
      {},
    );

    expect(state).toEqual(expectState);
  });
});
