import { changeSelectedRegion } from './actions';

import reducer from './reducer';

describe('reducer', () => {
  const preveState = {
    regions: [],
    selectedRegionID: 0,
  };

  it('지역버튼이 클릭되면 selectedRegionID가 바뀐다.', () => {
    const state = reducer(preveState, changeSelectedRegion(2));
    expect(state.selectedRegionID).toBe(2);
  });
});
