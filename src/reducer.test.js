import updateSelectedLocation from './actions';

import reducer from './reducer';

describe('reducer', () => {
  it('지역을 선택하여 선택된 지역값을 업데이트합니다.', () => {
    const state = reducer({ selectedlocationname: '' }, updateSelectedLocation('서울'));

    expect(state.selectedlocationname).toBe(/서울/);
  });
});
