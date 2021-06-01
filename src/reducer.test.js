import reducer from './reducer';

import {
  setRegions,
} from './actions';

describe('reducer', () => {
  it('Regions이 보여진다', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];

    const initialState = {
      regions: [],
    };

    const state = reducer(initialState, setRegions(regions));

    expect(state.regions).toHaveLength(1);
  });
});
