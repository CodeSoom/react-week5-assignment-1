import restaurantReducer, { initialState } from './restaurant';

describe('restaurantReducer', () => {
  it('인자 없이 호출하면 기본 상태를 반환합니다.', () => {
    const state = restaurantReducer();

    expect(state).toEqual(initialState);
  });

  it('액션 없이 호출하면 이전 상태를 반환합니다.', () => {
    const state = restaurantReducer(initialState);

    expect(state).toEqual(initialState);
  });
});
