import reducer from './reducer';

import {
  setRegions,
} from './actions';

const initialState = {
  regions: [],
};

describe('reducer', () => {
  it('카테고리 정보 설정', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(1);
  });
});
