import { setRegions } from '../actions/restaurant';
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

  it('setRegions 액션은 상태의 regions를 설정합니다.', () => {
    const regions = [{ id: 1, name: 'foo' }];
    const state = restaurantReducer(initialState, setRegions(regions));

    expect(state.regions).toEqual(regions);
  });
});
