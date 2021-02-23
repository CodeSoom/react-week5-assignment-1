import { changeSelectedRegion, setRegions } from './actions';

import reducer from './reducer';

describe('reducer', () => {
  const preventState = {
    regions: [],
    selectedRegionID: 0,
  };

  it('지역버튼이 클릭되면 selectedRegionID가 바뀐다.', () => {
    const state = reducer(preventState, changeSelectedRegion(2));
    expect(state.selectedRegionID).toBe(2);
  });

  it('초기 실행시 regions data를 가져온다.', () => {
    const data = [
      { id: 1, name: '서울' },
      { id: 2, name: '인천' },
    ];
    const state = reducer(preventState, setRegions(data));

    expect(state.regions).toHaveLength(2);
  });
});
